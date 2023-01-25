import prisma from "../config/database.js";

async function getCars() {
  const data = await prisma.cars.findMany({});
  return data;
}

async function getCar(id: number) {
  const data = await prisma.cars.findFirst({
    where : {
      "id": id
    }
  });
  return data;
}

async function getCarWithLicensePlate(licensePlate: string) {

  const data = await prisma.cars.findFirst({
    where: {
      "licensePlate": licensePlate
    }
  })
  return data;
}

async function createCar(model: string, licensePlate: string, year: string, color: string) {

  const data = await prisma.cars.create({
    data: {
      model,
      licensePlate,
      year,
      color
    }
  })

  return data;
}

async function deleteCar(id: number) {
  const data = await prisma.cars.delete({
    where: {
      id: id
    }
  })
  return data;
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;