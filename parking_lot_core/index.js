import { ParkingLot } from "./entities/ParkingLot.js";
import { PerHourPricingStrategy, FestivePricingStrategy } from "./entities/PricingStrategy.js";
import { Ticket } from "./entities/Ticket.js";
import { Vehicle } from "./entities/Vehicle.js";

// const { ParkingLot } = require("./entities/ParkingLot");
// const { PerHourPricingStrategy, FestivePricingStrategy } = require("./entities/PricingStrategy");
// const { Ticket } = require("./entities/Ticket");
// const { Vehicle } = require("./entities/Vehicle");

export class ParkingLotManager{

    constructor(noOfFloor,floorConfig, pricingStrategy, assingmentStrategy){
        this.noOfFloor = noOfFloor;
        this.floorConfig = floorConfig;
        this.parkingLot = undefined;
        this.pricingStrategy = pricingStrategy;
        this.assingmentStrategy = assingmentStrategy;
    }

    init(){
       this.parkingLot = new ParkingLot(this.noOfFloor, this.floorConfig);
    }

    setPricingStrategy(pricingStrategy){
        this.pricingStrategy = pricingStrategy;
    }


    parkVehicle(vehicle){
        //find nearest spot
        // let vehicleType = vehicle.getVehicleType();
        let spot= this.assingmentStrategy.findSpot(this.parkingLot, vehicle);
        if(!spot){
            return false;
        }
        //park vehicle
        let isVehicleParked = this.parkingLot.parkVehicle(vehicle, spot);
        if(!isVehicleParked){
            return false;
        }

        const tckt = new Ticket(vehicle, spot);

        return tckt;
    }

    exitVehicle(tckt){
        let spot = tckt.getSpot();
        spot.freeSpot();
        return tckt.calcFee(this.pricingStrategy);
    }

    printCurrentParkingLot(){
        console.log(JSON.stringify(this.parkingLot));
    }


}

export { Vehicle } from "./entities/Vehicle.js";
export { PerHourPricingStrategy, FestivePricingStrategy } from "./entities/PricingStrategy.js";

export { AssignmentStrategy, findFarthestSpotStrategy, findNearestSpotStrategy } from "./entities/AssignmentStrategy.js";




/**
 * 
 * 
 * parkingLot 
 *      
 * 
 * 
 */