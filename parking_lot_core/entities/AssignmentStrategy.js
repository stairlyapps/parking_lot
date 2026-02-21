export class AssignmentStrategy{
    findSpot(){

    }
}

export class findNearestSpotStrategy extends AssignmentStrategy{

    findSpot(parkingLot, Vehicle){

        console.log("----",Vehicle);

        let vehicleType = Vehicle.getVehicleType();
        console.log("----",vehicleType);
        for(let f in parkingLot.floors){
            for(let j=0;j<parkingLot.floors[f][vehicleType].length;j++){
                if(!parkingLot.floors[f][vehicleType][j].isSpotOccupied()){
                    return parkingLot.floors[f][vehicleType][j];
                }
            }
        }
        return null;
    }

}

export class findFarthestSpotStrategy extends AssignmentStrategy{

    findSpot(parkingLot, Vehicle){

        console.log("----",Vehicle);

        let vehicleType = Vehicle.getVehicleType();
        console.log("----",vehicleType);
        for(let f in parkingLot.floors){
            for(let j=parkingLot.floors[f][vehicleType].length;j>=0;j--){
                if(parkingLot.floors[f][vehicleType][j].isSpotOccupied()){
                    return parkingLot.floors[f][vehicleType][j];
                }
            }
        }
        return null;
    }

}