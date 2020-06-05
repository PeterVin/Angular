import { Injectable } from '@angular/core';

@Injectable( {
  providedIn: "root"
})
export class CarService {
  familyCars = [{
    id: 1,
    manufacturer: 'Opel',
    seats: '5',
    type: 'Astra’',
    color: 'white'
}, {
    id: 2,
    manufacturer: 'Audi',
    seats: '5',
    type:  'A3',
    color: 'gray'
}, {
    id: 3,
    manufacturer: 'Seat',
    seats: '2',
    type: 'Cordoba',
    color: 'green'
}];

sportCars = [{
  id: 4,
  manufacturer: 'Ferrari',
  seats: '2',
  type: 'Enzo',
  color: 'red'
}, {
  id: 5,
  manufacturer: 'Aston Martin',
  seats: '2',
  type: 'DB7',
  color: 'black'
}, {
  id: 6,
  manufacturer: 'Bugatti',
  seats: '2',
  type: 'Veyron',
  color: 'white'
}];

  getAllCars() {
    let TheArray = [];
    return this.familyCars.concat(this.sportCars);
  }
  getAllSportCars(){
    return this.sportCars;
  }
  getAllFamilyCars(){
    return this.familyCars;
  }
  constructor() { }

  addSportCar(
    idIP: number,
    manufacturerIP: string,
    seatsIP: number,
    typeIP: string,
    colorIP: string
  ) {
    this.sportCars.push({
      id: idIP,
      manufacturer: manufacturerIP,
      seats: seatsIP.toString(),
      type: typeIP,
      color: colorIP
    });
  }
}
