const { 
  travelModel,
  driverModel,
  driverCarModel,
  carModel,  
} = require('../models');

const {
  validateInputValues,
  validateAlreadyDriver,
} = require('./validations/validationsInputValues');

const { validateNewDriver } = require('./validations/validations');

const WAITING_DRIVER = 1;
const DRIVER_ON_THE_WAY = 2;
const TRAVEL_IN_PROGRESS = 3;
const TRAVEL_FINISHED = 4;

const getWaitingDriverTravels = async () => {
  const result = await travelModel.findByTravelStatusId(WAITING_DRIVER);
  return { type: null, message: result }; 
};

/* Aceitar a viagem; */
const travelAssign = async ({ travelId, driverId }) => {
  /* Validar se travelId e driverId são ids EXISTENTES */
  let error = await validateInputValues({ travelId, driverId });
  if (error.type) return error;

  /* Validar se o motorista que esta tentando pegar uma viagem, não esta em outra */
  error = await validateAlreadyDriver(travelId);
  if (error.type) return error;

  /* Alterar o status de "aguardando motorista" para "motorista a caminho" */
  await travelModel.updateById(travelId, { driverId, travelStatusId: DRIVER_ON_THE_WAY });
  /* Retornar os dados gravados no banco, para fins de relatório em tela */
  const result = await travelModel.findById(travelId);
  return { type: null, message: result }; 
};

/* Iniciar a viagem; */
const startTravel = async ({ travelId, driverId }) => {
  /* Validar se travelId e driverId são ids EXISTENTES */
  const error = await validateInputValues({ travelId, driverId });
  if (error.type) return error;

  /* Alterar o status de "motorista a caminho" para "viagem em andamento" */
  await travelModel.updateById(travelId, { driverId, travelStatusId: TRAVEL_IN_PROGRESS });

  /* Retornar os dados gravados no banco, para fins de relatório em tela */
  const result = await travelModel.findById(travelId);
  return { type: null, message: result }; 
};

/* Encerrar a viagem; */
const endTravel = async ({ travelId, driverId }) => {
  /* Validar se travelId e driverId são ids EXISTENTES */
  const error = await validateInputValues({ travelId, driverId });
  if (error.type) return error;

  /* Alterar o status de "viagem em andamento" para "viagem finalizada" */
  await travelModel.updateById(travelId, { driverId, travelStatusId: TRAVEL_FINISHED });

  /* Retornar os dados gravados no banco, para fins de relatório em tela */
  const result = await travelModel.findById(travelId);
  return { type: null, message: result }; 
};

const getDrivers = async () => {
  const drivers = await driverModel.findAll();
  return { type: null, message: drivers };
};

const createDriver = async (name, carIds) => {
  // Validando dados recebidos
  const error = await validateNewDriver(name, carIds);
  if (error.type) return error;

  // Cadastrando pessoa motorista
  const driverId = await driverModel.insert({ name });
     
  // Pegando a pessoa motorista cadastrada na DB
  const newDriver = await driverModel.findById(driverId);

  // Se houver a lista de ids de carros, criamos os relacionamentos
    // e adicionamos a lista ao resultado final,
    // senão usamos um array vazio no lugar
    if (carIds && carIds.length > 0) {
      await Promise.all(carIds.map(
        // Usando a camada Model para vincular os carros à pessoa motorista
        async (carId) => driverCarModel.insert({ driverId: newDriver.id, carId }),
    ));
    // Adicionamos os carros ao resultado final
    newDriver.cars = await Promise.all(
      carIds.map(async (carId) => carModel.findById(carId)),
    );
    } else {
      newDriver.cars = [];
    }
    
    // Retornando os dados da pessoa motorista
    return { type: null, message: newDriver };
};

module.exports = {
  travelAssign,
  startTravel,
  endTravel,
  getWaitingDriverTravels,
  getDrivers,
  createDriver,
};