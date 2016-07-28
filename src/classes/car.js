import {Vehicle} from'./vehicle.js';
export class Car extends Vehicle{
   constructor(license,model,latLong){
   	super(license,model,latLong);
   	this.miles=miles;
   	this.make=make;
   }
}