import { Spot } from "./Spot.js";

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
        // for(let i=0;i<floorConfig.length;i++){
        //     let k = `floorNo_${i}`; // floorNo_1
        //     this.floors[k] = {}; // floorNo_1 = {}
        //     let item = floorConfig[i]; // bike : 10, car : 10, truck: 5
        //     for(let it in item){
        //         let it_count = item[it]; //10
        //         this.floors[k][it] = [];
        //         for(let j=0;j<it_count;j++){
        //             this.floors[k][it].push(-1);
        //         }
        //     }
        // }


        for(let i=0;i<floorConfig.length;i++){
            let k = `floorNo_${i}`; // floorNo_1
            this.floors[k] = {}; // floorNo_1 = {}
            let item = floorConfig[i]; // bike : 10, car : 10, truck: 5
            for(let it in item){
                let it_count = item[it]; //10
                this.floors[k][it] = [];
                for(let j=0;j<it_count;j++){
                    let spot = new Spot(`F${i}-S${j}`,)
                    this.floors[k][it].push(spot);
                }
            }
        }
    }

    parkVehicle(vehicle, spot){
        if(!spot.isSpotOccupied()){
            spot.assignVehicle(vehicle);
            return true;
        }
        return false;
    }

    


}