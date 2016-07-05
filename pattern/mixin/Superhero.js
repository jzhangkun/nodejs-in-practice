var Person = function ( firstName, lastName, gender ) {
    this.firstName = firstName;
    this.lastName  = lastName;
    this.gender = gender;
};

var clark = new Person( "Clark", "Kent", "male");
console.log( clark );

var Superhero = function( firstName, lastName, gender, powers ) {
    Person.call(this, firstName, lastName, gender);
    this.powers = powers;
};

Superhero.prototype = Object.create( Person.prototype );

var superman = new Superhero( "Clark", "Kent", "male", ["flight", "heat-vision"]);
console.log( superman );
