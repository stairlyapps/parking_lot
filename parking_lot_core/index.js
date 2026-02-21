import { ParkingLot } from "./entities/ParkingLot.js";
import { PerHourPricingStrategy, FestivePricingStrategy } from "./entities/PricingStrategy.js";
import { Ticket } from "./entities/Ticket.js";
import { Vehicle } from "./entities/Vehicle.js";

// const { ParkingLot } = require("./entities/ParkingLot");
// const { PerHourPricingStrategy, FestivePricingStrategy } = require("./entities/PricingStrategy");
// const { Ticket } = require("./entities/Ticket");
// const { Vehicle } = require("./entities/Vehicle");

export class ParkingLotManager{

    constructor(noOfFloor,floorConfig,pricingStrategyType ){
        this.noOfFloor = noOfFloor;
        this.floorConfig = floorConfig;
        this.parkingLot = undefined;
        this.pricingStrategyType = pricingStrategyType;
    }

    init(){
       this.parkingLot = new ParkingLot(this.noOfFloor, this.floorConfig);
       if(this.pricingStrategyType == "NON_FESTIVE"){
        this.pricingStrategy = new PerHourPricingStrategy();
       } else if(this.pricingStrategyType == "FESTIVE"){
        this.pricingStrategy = new FestivePricingStrategy();
       }
    }

    setPricingStrategy(pricingStrategyType){
        this.pricingStrategyType = pricingStrategyType;
        if(this.pricingStrategyType == "NON_FESTIVE"){
        this.pricingStrategy = new PerHourPricingStrategy();
       } else if(this.pricingStrategyType == "FESTIVE"){
        this.pricingStrategy = new FestivePricingStrategy();
       }
    }

    createVehicle(vehicleType,vehicleNo){
        return new Vehicle(vehicleType, vehicleNo);
    }


    parkVehicle(vehicle){
        //find nearest spot
        // let vehicleType = vehicle.getVehicleType();
        let spotId = this.parkingLot.findNearestSpot(vehicle);
        if(!spotId){
            return false;
        }
        //park vehicle
        let isVehicleParked = this.parkingLot.parkVehicle(vehicle, spotId);
        if(!isVehicleParked){
            return false;
        }

        const tckt = new Ticket(vehicle, spotId);

        return tckt;
    }

    exitVehicle(tckt){
        let spotId = tckt.getSpotId();
        let vehicleType = tckt.getVehicle().getVehicleType();
        this.parkingLot.freeSpot(spotId,vehicleType);
        return tckt.calcFee(this.pricingStrategy);
    }

    printCurrentParkingLot(){
        console.log(JSON.stringify(this.parkingLot));
    }


}




/**
 * 
 * 
 * parkingLot 
 *      
 * 
 * 
 */