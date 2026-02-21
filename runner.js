const { ParkingLotManager } = require("./parking_lot_core");

function main(){
    //initialise ParkingLotManager
    const floorConfig = [
     {
        'BIKE': 8,
        'CAR': 5,
        'TRUCK':2
     } ,
     {
        'BIKE': 5,
        'CAR': 2,
        'TRUCK':1
     }   
    ]
    const parkingLotMgr = new ParkingLotManager(2,floorConfig,"NON_FESTIVE" );
    parkingLotMgr.init();

    parkingLotMgr.printCurrentParkingLot();

    const vehicle = parkingLotMgr.createVehicle("BIKE", "HR 26");
    console.log("vehicle",vehicle);
    const tckt = parkingLotMgr.parkVehicle(vehicle);
    console.log("tckt",tckt);

    parkingLotMgr.printCurrentParkingLot();

    const amt = parkingLotMgr.exitVehicle(tckt);
    console.log("amt",amt);

    parkingLotMgr.printCurrentParkingLot();



}

main();