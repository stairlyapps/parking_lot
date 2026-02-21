export class Ticket{

    max = 10000;

    constructor(vehicle, spotId){
        this.id = Math.floor(Math.random() * this.max);
        // this.vehicleNo = Vehicle.getVehicleNo();
        this.vehicle = vehicle;
        this.spotId = spotId;
        this.entryTime = Date.now();
    }

    getSpotId(){
        return this.spotId;
    }

    calcFee(pricingStrategy){
        //calc hour spent
        let currTime = Date.now() + 100000;

        let hrSpent = Math.ceil( (currTime - this.entryTime) );
        console.log("hrSpent",hrSpent);
        console.log(pricingStrategy.getPricePerHr(this.vehicle));
        return pricingStrategy.getPricePerHr(this.vehicle) * hrSpent;
    }

    getVehicle(){
        return this.vehicle;
    }


}