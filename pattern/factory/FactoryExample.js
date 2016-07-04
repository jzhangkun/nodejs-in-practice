// Types.js - Constructors used behind the scenes

// A constructor for defineing new cars
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

// Create an instance of our factory that makes cars
var carFactory = new VehicleFactory();
var car = carFactory.createVehicle({
    vehicleType: "car",
    color: "red",
    doors: 6
});

console.log( car instanceof Car);
console.log( car );

var truck = carFactory.createVehicle({
    vehicleType: "truck",
    color: "blue"
});

console.log( truck instanceof Truck);
console.log( truck );
