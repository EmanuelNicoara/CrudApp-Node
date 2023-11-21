import { v4 as uuidv4 } from 'uuid';

let cars = [];

export const getCars = (req, res) => {


    res.send(cars);
}


export const createCar = (req, res) => {

    const car = req.body;

    cars.push({ ...car, id: uuidv4() });

    res.send(`Car with the name brand ${car.carBrand} added to the database`);
}

export const getCar = (req, res) => {
    const { id } = req.params;

    const foundCar = cars.find((car) => car.id === id);

    res.send(foundCar);
}

export const deleteCar = (req, res) => {
    const { id } = req.params;

    cars = cars.filter((car) => car.id != id);

    res.send(`Car with the id ${id} deleted from database`);
}

export const updateCar = (req, res ) => {
    const { id } = req.params;
    const { carBrand, carModel, vehicleType, enginePower, horsePower, fuelType } = req.body;

    const car = cars.find((car) => car.id === id);

    if(carBrand) car.carBrand = carBrand;
    if(carModel) car.carModel = carModel;
    if(vehicleType) car.vehicleType = vehicleType;
    if(enginePower) car.enginePower = enginePower;
    if(horsePower) car.horsePower = horsePower;
    if(fuelType) car.fuelType = fuelType;

    res.send(`Car with id ${id} has been updated`);

};