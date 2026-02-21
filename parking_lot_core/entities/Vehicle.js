export class Vehicle {
    constructor(vehicleType, vehicleNo, vehicleBaseRate, vehicleCategory) {
        this.vehicleType = vehicleType;
        this.vehicleNo = vehicleNo;
        this.vehicleBaseRate = vehicleBaseRate;
        this.vehicleCategory = vehicleCategory;
    }

    getVehicleType() {
        return this.vehicleType;
    }

    getVehicleCategory() {
        return this.vehicleCategory;
    }

    getVehicleBaseRate() {
        return this.vehicleBaseRate;
    }

    getVehicleNo() {
        return this.vehicleNo;
    }

}

export class Bike extends Vehicle {
    vehicleType = "BIKE";
    vehicleCategory = "TWO_WHEELER"
    vehicleBaseRate = 10;
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
    vehicleCategory = "FOUR_WHEELER"
    vehicleBaseRate = 20;
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
    vehicleCategory = "FOUR_WHEELER"
    vehicleBaseRate = 40;
    constructor(vehicleNo) {
        super();
        this.vehicleNo = vehicleNo;
    }
    getPricePerHr(){
        return 40;
    }
}