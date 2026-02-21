import { Bike, Car, Truck,  } from "./Vehicle.js";

export class PricingStrategy{
}


export class PerHourPricingStrategy extends PricingStrategy{
    getPricePerHr(vehicle){
        if(vehicle instanceof Bike){
            return 10;
        }else  if(vehicle instanceof Car){
            return 20;
        }else  if(vehicle instanceof Truck){
            return 40;
        }
    }
}

export class FestivePricingStrategy extends PricingStrategy{
    getPricePerHr(vehicle){
        if(vehicle instanceof Bike){
            return 20;
        }else  if(vehicle instanceof Car){
            return 30;
        }else  if(vehicle instanceof Truck){
            return 50;
        }
    }
}


