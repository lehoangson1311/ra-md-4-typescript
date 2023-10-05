import { Car } from "./Models/Car";

export class CarManager {
  static cars: Car[] = [];

  public static createCar(data: Car): void {
    CarManager.cars.push(data);
  }

  public static updateCar(id: number, data: Car): void {
    CarManager.cars = CarManager.cars.map((car: Car) => {
      if (car.getCarId === id) {
        data.setCarId = id;
        return data;
      }
      return car;
    });
  }

  public static showAllCar(): any {
    CarManager.cars.forEach((car: Car) => {
      car.displayData();
    });
  }

  public static deleteCar(id: number): void {
    CarManager.cars = CarManager.cars.filter((car) => car.getCarId !== id);
  }
}
