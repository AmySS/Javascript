// var x = 'global';
// function a() {
//     this.x = "a's x";
//     function b() {
//         console.log(x);
//     }
//     b();
// }
// a();
// console.log(x);

var x = 100;
var inc = function(){
  var x = 0;
  return function(){
    console.log(x++);
  };
};

var inc1 = inc();
var inc2 = inc();

inc1();  // -> 0
inc1();  // -> 1
inc2();  // -> 0
inc1();  // -> 2
inc2();  // -> 1
x;       // -> 100
