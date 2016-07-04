// Types.js - Constructors used behind the scenes

// A constructor for defining Vehicle
function Vehicle() {}
Vehicle.prototype.drive = function() {
    console.log("driving");
};
Vehicle.prototype.breakDown = function() {
    console.log("break down");
};

// A constructor for defining new cars
function Car( options ) {
    options = options || {};
    this.doors = options.doors || 4;
    this.state = options.state || "barnd new";
    this.color = options.color || "silver";
}

Car.prototype = new Vehicle();

// A constructor for defining new trucks
function Truck( options ) {
    options = options || {};
    this.state = options.state || "used";
    this.wheelSize = options.wheelSize || "large";
    this.color = options.color || "blue";
}
Truck.prototype = new Vehicle();

// abstractVehicleFactory.js
var abstractVehicleFactory  = (function() {
    var types = {};
    return {
        getVehicle: function( type, options) {
            var VehicleType = types[type];
            return VehicleType ? new VehicleType(options): null;
        },
        registerVehicle: function( type, vehicle) {
            var proto = vehicle.prototype;
            // only register the classes that fulfill the vehicle contract
            if ( proto.drive && proto.breakDown ) {
                types[type] = vehicle;
            } else {
                console.log("*Rule compliance for " + type);
            }
            return abstractVehicleFactory;
        },
        debugTypes: function() { console.log( types ) }
    };
})();

abstractVehicleFactory.registerVehicle("car", Car);
abstractVehicleFactory.registerVehicle("truck", Truck);
abstractVehicleFactory.debugTypes();

var truck = abstractVehicleFactory.getVehicle("truck", {
    state: "omg...so bad.",
    color: "pink"
});

console.log( truck instanceof Truck);
console.log( truck );

var car = abstractVehicleFactory.getVehicle("car", {
    state: "assembled",
    color: "colorful"
});

console.log( car instanceof Car);
console.log( car );
