import { Bike, Car, Truck,  } from "./Vehicle.js";

const discountByCategory = {
  TWO_WHEELER: 0.10,
  FOUR_WHEELER: 0.15
}


export class PricingStrategy{
}


export class PerHourPricingStrategy extends PricingStrategy{
    getPricePerHr(vehicle){
        // if(vehicle instanceof Bike){
        //     return 10;
        // }else  if(vehicle instanceof Car){
        //     return 20;
        // }else  if(vehicle instanceof Truck){
        //     return 40;
        // }

        return vehicle.getVehicleBaseRate();
    }
}

export class FestivePricingStrategy extends PricingStrategy{
    getPricePerHr(vehicle){
        // if(vehicle instanceof Bike){
        //     return 20;
        // }else  if(vehicle instanceof Car){
        //     return 30;
        // }else  if(vehicle instanceof Truck){
        //     return 50;
        // }

        return ( ((100 - discountByCategory[vehicle.getVehicleCategory()])  * vehicle.getVehicleBaseRate()) / 100);

    }
}


