export class Ticket{

    max = 10000;

    constructor(vehicle, spot){
        this.id = Math.floor(Math.random() * this.max);
        // this.vehicleNo = Vehicle.getVehicleNo();
        this.vehicle = vehicle;
        this.spot = spot;
        this.entryTime = Date.now();
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

    getSpot(){
        return this.spot;
    }


}