//   function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

// let count = 0;
// (function () {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();

// for (var i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i); // What is logged?
//   }, 1000);
// }

// function outer(l)
// {
//   function inner(b)
//   {
//     console.log(`Area of rectange is ${l*b}`)
//   }inner(5);
// }
// outer(10);


// var count = 0;
// function funouter()
// {
//   function funinner()
//   {
//     count++;
//     console.log(count);
//   }funinner();
// }
// funouter();
// funouter();
// funouter();
// funouter();
// funouter();


// var a = 12;
// (function () {
//   alert(a);
// })();


// var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     alert(a);
//   };
// })();
// x();


var globalVar = "xyz";
(function outerFunc(outerArg) {
    var outerVar = 'a';
    (function innerFunc(innerArg) {
    var innerVar = 'b'; 
    console.log(
        "outerArg = " + outerArg + "\n" + //123
        "innerArg = " + innerArg + "\n" + //456
        "outerVar = " + outerVar + "\n" + //a
        "innerVar = " + innerVar + "\n" + //b
        "globalVar = " + globalVar); // xyz
    
    })(456);
})(123);