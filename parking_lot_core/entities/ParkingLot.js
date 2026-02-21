export class ParkingLot{

    /*
        floorConfig =[
        {
        bike : 10, car : 10, truck: 5
        },
        {
        bike : 100, car : 100, truck: 0
        }

        Floor -> {
            floorNo_1 : {
                bike: [-1,-1..... <10>],
                car: [-1,-1,......<10>],
                truck : [-1,-1,.....<5>]
            },
            floorNo_2 : {
                bike: [-1,-1..... <100>],
                car: [-1,-1,......<100>],
                truck : []
            }
        }
        ]
    */

    constructor(noOfFloor,floorConfig ){
        this.noOfFloor = noOfFloor;
        // this.floorConfig = floorConfig;
        this.floors = {};
        for(let i=0;i<floorConfig.length;i++){
            let k = `floorNo_${i}`; // floorNo_1
            this.floors[k] = {}; // floorNo_1 = {}
            let item = floorConfig[i]; // bike : 10, car : 10, truck: 5
            for(let it in item){
                let it_count = item[it]; //10
                this.floors[k][it] = [];
                for(let j=0;j<it_count;j++){
                    this.floors[k][it].push(-1);
                }
            }
        }
    }

    findNearestSpot(Vehicle){
        let fl = null, idx = null;

        console.log("----",Vehicle);

        let vehicleType = Vehicle.getVehicleType();
        console.log("----",vehicleType);
        for(let f in this.floors){
            for(let j=0;j<this.floors[f][vehicleType].length;j++){
                if(this.floors[f][vehicleType][j] == -1){
                    fl = f;
                    idx = j;
                    return `${fl}-${idx}`
                }
            }
        }
        return null;
    }

    parkVehicle(Vehicle, spotId){
        console.log("----",Vehicle);
        let vehicleType = Vehicle.getVehicleType();
        let vehicleNo = Vehicle.getVehicleNo();
        let {fl,idx} = this.getFloorAndSpotFromSpotId(spotId);
        if(this.floors[fl][vehicleType][idx] == -1){
            this.floors[fl][vehicleType][idx] = vehicleNo;
            return true;
        }
        return false;
    }

    getFloorAndSpotFromSpotId(spotId){
        let [fl,idx] = spotId.split("-");
        return {fl,idx};
    }

    freeSpot(spotId, vehicleType){
        let {fl,idx} = this.getFloorAndSpotFromSpotId(spotId);
        this.floors[fl][vehicleType][idx] = -1;
    }


}