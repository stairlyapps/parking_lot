
export class Spot{

    constructor(id){
        this.id = id;
        // this.type = type;
        this.occupiedVehicle = null;
    }

    isSpotOccupied(){
        return this.occupiedVehicle ? true : false;
    }

    getSpotId(){
        return this.id;
    }

    assignVehicle(vehicle){
        this.occupiedVehicle  = vehicle;
    }

    freeSpot(){
        this.occupiedVehicle = null;
    }

}