import { Vehicle } from "./Vehicle.js";

export class VehicleFactory{

    static create(vehicleType, vehicleNo){
        switch(vehicleType){
            case "BIKE":
                return new Vehicle("BIKE",vehicleNo, 10, "TWO_WHEELER")
            case "CAR":
                return new Vehicle("CAR",vehicleNo, 20, "FOUR_WHEELER")
            case "TRUCK":
                return new Vehicle("TRUCK",vehicleNo, 40, "FOUR_WHEELER")
            default:
                return null;
        }
    }
}