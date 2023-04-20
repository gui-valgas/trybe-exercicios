const { expect } = require('chai');
const sinon = require('sinon');
const travelModel = require('../../../src/models/travel.model');
const driveDB = require('../../../src/models/driver.model');
const driver = require('../../../src/services/driver.service');
const { carList } = require('./mocks/car.service.mock');
const {
  driverModel,
  driverCarModel,
  carModel,
} = require('../../../src/models');

const {
  driverService,
} = require('../../../src/services');

const {
  listTravelsWithoutDriver,
} = require('./mocks/passenger.service.mock');

const {
  correctReturnTravel,
  correctReturnDriver,
  busyDriver,
  driverList,
  createdDriverWithoutCars,
  createdDriverWithCars,
  createdDriver,
} = require('./mocks/driver.service.mock');

const DRIVER_ON_THE_WAY = 2;

const validDriverName = 'Gus';
const invalidValue = '1';

describe('Verificando service Driver', function () {
  describe('Tentando cadastrar uma nova pessoa motorista com erros semânticos', function () {
    it('retorna um erro ao receber um nome inválido', async function () {
      const response = await driverService.createDriver(invalidValue);

      expect(response.type).to.equal('INVALID_VALUE');
      expect(response.message).to.equal(
        '"name" length must be at least 3 characters long',
      );
    });
    it('retorna um erro ao receber uma lista de carros inválida', async function () {
      const response = await driverService.createDriver(
        validDriverName,
        invalidValue,
      );

      expect(response.type).to.equal('INVALID_VALUE');
      expect(response.message).to.equal('"carIds" must be an array');
    });
  });

  describe('Tentando cadastrar uma nova pessoa motorista com erros de id', function () {
    beforeEach(function () {
      // Aqui o nosso stub deve simular que o carro solicitado não existe
      sinon.stub(carModel, 'findById').resolves();
    });

    afterEach(function () {
      sinon.restore();
    });

    it('retorna o erro "CAR_NOT_FOUND"', async function () {
      const response = await driverService.createDriver(validDriverName, [999]);

      expect(response.type).to.equal('CAR_NOT_FOUND');
    });
    it('retorna a mensagem "Some car is not found"', async function () {
      const response = await driverService.createDriver(validDriverName, [999]);

      expect(response.message).to.equal('Some car is not found');
    });
  });

  describe('Cadastrando uma nova pessoa motorista com sucesso sem carros', function () {
    beforeEach(function () {
      sinon.stub(driverModel, 'insert').resolves(1);
      sinon.stub(driverModel, 'findById').resolves(createdDriver);
    });

    afterEach(function () {
      sinon.restore();
    });

    it('retorna a pessoa motorista cadastrada', async function () {
      const response = await driverService.createDriver(validDriverName);
      
      expect(response.message).to.deep.equal(createdDriverWithoutCars);
    });
    it('não retorna erro', async function () {
      const response = await driverService.createDriver(validDriverName);
      
      expect(response.type).to.equal(null);
    });
  });

  describe('Cadastrando uma nova pessoa motorista com sucesso com carros', function () {
    beforeEach(function () {
      sinon.stub(driverModel, 'insert').resolves(1);
      sinon.stub(driverModel, 'findById').resolves(createdDriver);
      sinon.stub(driverCarModel, 'insert').resolves();

      // 3 - ao procurar um carro, mande o primeiro e depois o segundo da lista
      // eles são chamados tanto ao validar como para retornar na função principal
      sinon.stub(carModel, 'findById')
      .onCall(0) // chamada da validação
        .resolves(carList[0])
      .onCall(1) // chamada da validação
        .resolves(carList[1])
      .onCall(2) // chamada da função
        .resolves(carList[0])
      .onCall(3) // chamada da função
        .resolves(carList[1]);
    });

    afterEach(function () {
      sinon.restore();
    });
    
    it('retorna os carros vinculados à pessoa motorista', async function () {
      const response = await driverService.createDriver(
        validDriverName,
        [1, 2],
      );

      expect(response.type).to.equal(null);
      expect(response.message).to.deep.equal(createdDriverWithCars);
    });
    it('não retorna erro', async function () {
      const response = await driverService.createDriver(
        validDriverName,
        [1, 2],
      );

      expect(response.type).to.equal(null);
    });
  });
  /* Validar se os IDs recebidos são existentes */
  describe('Atribuições de viagem com erros de id inexistente', function () {
    it('estão falhando ao tentar atribuir uma viagem com viajante inexistente', async function () {
      sinon.stub(travelModel, 'findById').resolves(undefined);

      const body = { travelId: 99999, driverId: 1 };
      const error = await driver.travelAssign(body);
    
      expect(error.type).to.equal('TRAVEL_NOT_FOUND');
      expect(error.message).to.equal('travel id not found');
    });

    it('estão falhando ao tentar atribuir uma viagem com motorista inexistente', async function () {
      sinon.stub(travelModel, 'findById').resolves(correctReturnTravel);
      sinon.stub(driveDB, 'findById').resolves(undefined);

      const body = { travelId: 1, driverId: 99999 };
      const error = await driver.travelAssign(body);
    
      expect(error.type).to.equal('DRIVER_NOT_FOUND');
      expect(error.message).to.equal('driver id not found');
    });
  });

  /* Validar se o motorista que esta tentando pegar uma viagem, não esta em outra viajem */
  describe('Atribuições de viagem com motorista ocupado', function () {
    it('esta falhando ao tentar iniciar uma viagem com motorista ocupado', async function () {
      sinon.stub(travelModel, 'findById')
        .onFirstCall()
          .resolves(correctReturnTravel)
        .onSecondCall()
          .resolves(busyDriver);
      sinon.stub(driveDB, 'findById').resolves(correctReturnDriver);
      
      const body = { travelId: 1, driverId: 1 };
      const error = await driver.travelAssign(body);

      expect(error.type).to.equal('TRAVEL_CONFLICT');
      expect(error.message).to.equal('travel already assigned');
      sinon.restore();
    });
  });

  /* Validar se podemos atribuir uma viagem com sucesso */
  describe('Atribuições de viagem com sucesso', function () {
    it('estão atribuindo com sucesso', async function () {
      sinon.stub(travelModel, 'updateById').resolves(true);
      sinon.stub(travelModel, 'findById').resolves(correctReturnTravel);
      sinon.stub(driveDB, 'findById').resolves(correctReturnDriver);

      const body = { travelId: 1, driverId: 1 };
      const travel = await driver.travelAssign(body);
  
      expect(travel.message).to.deep.equal({
        id: 1,
        passengerId: 1,
        driverId: null,
        travelStatusId: DRIVER_ON_THE_WAY,
        startingAddress: 'Start',
        endingAddress: 'End',
        requestDate: '2022-08-24T03:04:04.374Z',
      });
      sinon.restore();
    });
  });

  describe('Deve retornar as viagens aguardando aceite de motorista', function () {
    beforeEach(function () {
      sinon.stub(travelModel, 'findByTravelStatusId').resolves(listTravelsWithoutDriver);
    });

    it('retorna uma array com os elementos esperados', async function () {
      const response = await driver.getWaitingDriverTravels();

      /* Verificamos se o type é igual a nulo para garantir que nenhum erro aconteceu! */
      expect(response.type).to.equal(null);

      /* Verificamos se o atributo message nos devolve a array mockada! */
      expect(response.message).to.be.deep.equal(listTravelsWithoutDriver);
    });
  });

  describe('Listando as pessoas motoristas', function () {
    beforeEach(function () {
      sinon.stub(driverModel, 'findAll').resolves(driverList);
    });

    it('a lista de motoristas é um array', async function () {
      const travel = await driverService.getDrivers();
       
      expect(travel.message instanceof Array).to.equal(true);
    });

    it('retorna a lista de motoristas com sucesso', async function () {
      const travel = await driverService.getDrivers();
 
      expect(travel.message).to.deep.equal(driverList);
    });

    afterEach(function () {
      sinon.restore();
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});