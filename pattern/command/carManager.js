var carManager = (function(){

  var carManager = {

    // request information
    requestInfo: function( model, id ){
      return "The information for " + model + " with ID " + id + " is foobar";
    },

    // purchase the car
    buyVehicle: function( model, id ){
      return "You have successfully purchased Item " + id + ", a " + model;
    },

    // arrange a viewing
    arrangeViewing: function( model, id ){
      return "You have successfully booked a viewing of " + model + " ( " + id + " ) ";
    }

  };
  carManager.execute = function ( name ) {
      return carManager[name] && carManager[name].apply( carManager, [].slice.call(arguments, 1) );
  };
  return carManager;
})();

console.log(carManager.execute( "buyVehicle", "Ford Escort", "453542" ));
console.log(carManager.execute( "arrangeViewing", "Ferrari", "14523" ));
console.log(carManager.execute( "requestInfo", "Ford Escort", "34232" ));
