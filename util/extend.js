function extend(Sub,Sup) {
    // define null function
    var F = function(){};

    // inhert the prototype from Super
    F.prototype = Sup.prototype;

    // pass the prototype of Super to Sub
    Sub.prototype = new F();

    //? reset the constructor to Sub itselft
    Sub.prototype.constructor = Sub;

    // save the prototype of Subper
    Sub.sup = Sup.prototype;

    //?
    if(Sup.prototype.constructor === Object.prototype.constructor) {
        Sup.prototype.constructor = Sup;
    }
}

module.exports = extend;
