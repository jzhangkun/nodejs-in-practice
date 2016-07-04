// Types.js - Constructors used behind the scenes

// A constructor for defining new cars
function Car( options ) {
    this.doors = options.doors || 4;
    this.state = options.state || "barnd new";
    this.color = options.color || "silver";
}

// A constructor for defining new trucks
function Truck( options ) {
    this.state = options.state || "used";
    this.wheelSize = options.wheelSize || "large";
    this.color = options.color || "blue";
}

// Factory Example.js

// Define a skeleton vehicle factory
function VehicleFactory() {}

// Our default vehicleClass is Car
VehicleFactory.prototype.vehicleClass = Car;
VehicleFactory.prototype.createVehicle = function( options ) {
    switch (options.vehicleType) {
        case "car":
            this.vehicleClass = Car;
            break;
        case "truck":
            this.vehicleClass = Truck;
            break;
    }
    return new this.vehicleClass( options );
};

function TruckFactory() {}

TruckFactory.prototype = new VehicleFactory();
TruckFactory.prototype.vehicleClass = Truck;


var truckFactory = new TruckFactory();
var truck = truckFactory.createVehicle({
    //vehicleType: "truck",
    state: "omg...so bad.",
    color: "pink"
});

console.log( truck instanceof Truck);
console.log( truck );

// I can still create car with truckFactory
var car = truckFactory.createVehicle({
    vehicleType: "car",
    state: "assembled",
    color: "colorful"
});

console.log( car instanceof Car);
console.log( car );
