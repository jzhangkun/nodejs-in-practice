
var testModule = (function (){
    var counter = 0;
    function inner () {
        console.log("can you find me from outer?");
    }
    return {
        getCounter : function () {
            return counter;
        },
        incrementCounter : function () {
            return counter++;
        },
        resetCounter : function () {
            counter = 0;
        }
    };
})();

testModule.incrementCounter();
var cnt = testModule.getCounter();
console.log(cnt);

//can not call inner() from outer
//inner();
