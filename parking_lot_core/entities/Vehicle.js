export class Vehicle {
    constructor(vehicleType, vehicleNo) {
        if (vehicleType == "BIKE") {
            return new Bike(vehicleNo);
        } else if (vehicleType == "CAR") {
            return new Car(vehicleNo);
        } else if (vehicleType == "TRUCK") {
            return new Truck(vehicleNo);
        }

    }

    getVehicleType() {
        return this.vehicleType;
    }

    getVehicleNo() {
        return this.vehicleNo;
    }

}

export class Bike extends Vehicle {
    vehicleType = "BIKE";
    constructor(vehicleNo) {
        super();
        this.vehicleNo = vehicleNo;
    }
    getPricePerHr(){
        return 10;
    }
}

export class Car extends Vehicle {
    vehicleType = "CAR";
    constructor(vehicleNo) {
        super();
        this.vehicleNo = vehicleNo;
    }
    getPricePerHr(){
        return 20;
    }
}

export class Truck extends Vehicle {
    vehicleType = "TRUCK";
    constructor(vehicleNo) {
        super();
        this.vehicleNo = vehicleNo;
    }
    getPricePerHr(){
        return 40;
    }
}