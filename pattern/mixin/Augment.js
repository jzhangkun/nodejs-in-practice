var Car = function( setting ) {
    setting = setting || {};
    this.model = setting.model || "no model provided";
    this.color = setting.color || "no colour provided";
};

var Mixin = function(){};
Mixin.prototype = {
    driveForward: function() {
        console.log( "drive forward" );
    },
    driveBackward: function() {
        console.log( "drive backward" );
    },
    driveSideways: function() {
        console.log( "drive sideways" );
    }
};

function augment( receivingClass, givingClass ) {
    if (arguments.length > 2) {
        for ( var i = 2, len = arguments.length; i < len; i++ ) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    } else {
        for ( var methodName in givingClass.prototype ) {
            if ( !Object.hasOwnProperty.call(receivingClass.prototype, methodName) ) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
        }
    }
}

// incldue functions explictly
augment( Car, Mixin, "driveForward", "driveBackward" );

var car = new Car({
    model: "Ford Escort",
    color: "blue"
});

car.driveForward();
car.driveBackward();

// incldue all functions
augment( Car, Mixin );

var mySportsCar = new Car({
    model: "Porsche",
    color: "red"
});

mySportsCar.driveSideways();
