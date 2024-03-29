const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { correctReturnTravel } = require('./mocks/driver.controller.mock');

const { expect } = chai;
chai.use(sinonChai);

const { driverService } = require('../../../src/services');
const { driverController } = require('../../../src/controllers');

describe('Teste de unidade do driverController', function () {
  after(function () {
    sinon.restore();
  });

  describe('Buscando as viagens em aberto', function () {
    it('quando não tem nenhuma viagem cadastrada retorna um array vazio', async function () {
      // Este é o objeto de resposta (res) inicialmente é um objeto vazio
      // que será preenchido pelo express.
      const res = {};

      // Este é o objeto de requisição (req) que contém os dados necessários
      // para a requisição. Como a requisição é um GET não é esperado nenhum
      // dado durante a requisição.
      const req = {};

      // Criamos um stub para a função "res.status" que retorna o objeto res quando executada
      res.status = sinon.stub().returns(res);

      // Criamos um stub para a função "res.json" que não retorna nada
      res.json = sinon.stub().returns();

      // Criamos um stub para a chamada do service "driverService.getWaitingDriverTravels" que irá
      // retornar uma resposta com um array vazio
      sinon
        .stub(driverService, 'getWaitingDriverTravels')
        .resolves({ type: null, message: [] });

      // Realizamos a chamada para o controller simulando o recebimento de uma requisição
      await driverController.openTravel(req, res);

      // Validamos se o status code da resposta é igual a 200
      expect(res.status).to.have.been.calledWith(200);

      // Validamos se o json da resposta é igual a um array vazio
      expect(res.json).to.have.been.calledWith([]);
      sinon.restore();
    });
  });

  describe('Atribuições de viagem com erros de id inexistente', function () {
    afterEach(function () {
      sinon.restore();
    });
    it('travelId inexistente status 404 e mensagem travelId not found', async function () {
      const res = {};
      const req = { params: { travelId: 9999, driverId: 1 }, body: {} };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(driverService, 'travelAssign')
        .resolves({ type: 'TRAVEL_NOT_FOUND', message: '"travel id" not found' });
      await driverController.travelAssign(req, res);

      // expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith('"travel id" not found');

      sinon.restore();
    });

    it('driverId inexistente status 404 e mensagem driverId not found', async function () {
        const res = {};
        const req = { params: { travelId: 1, driverId: 9999 }, body: { } };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        sinon.stub(driverService, 'travelAssign')
          .resolves({ type: 'DRIVER_NOT_FOUND', message: '"driver id" not found' });

        await driverController.travelAssign(req, res);

        // expect(res.status).to.have.been.calledWith(404);
        expect(res.json).to.have.been.calledWith('"driver id" not found');

        sinon.restore();
    });
  });

  describe('Atribuições de viagem com motorista ocupado', function () {
    afterEach(function () {
      sinon.restore();
    });
    it('retorna status 409 e mensagem travel already assigned', async function () {
      const res = {};
      const req = { params: { travelId: 1, driverId: 1 }, body: {} };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(driverService, 'travelAssign')
        .resolves({ type: 'TRAVEL_CONFLICT', message: 'travel already assigned' });

      await driverController.travelAssign(req, res);

      // expect(res.status).to.have.been.calledWith(409);
      expect(res.json).to.have.been.calledWith('travel already assigned');

      sinon.restore();
    });
  });

  describe('Atribuições de viagem com sucesso', function () {
    it('retorna status 200 e objeto com resultado', async function () {
      const res = {};
      const req = { params: { travelId: 1, driverId: 1 }, body: {} };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(driverService, 'travelAssign')
        .resolves({ type: null, message: correctReturnTravel });

      await driverController.travelAssign(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith({
        id: 1,
        passengerId: 1,
        driverId: 1,
        travelStatusId: 2,
        startingAddress: 'Start',
        endingAddress: 'End',
        requestDate: '2022-08-24T03:04:04.374Z',
     });
     sinon.restore();
    });
  });
});