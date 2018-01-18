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
String.prototype.compare = function(b) {
    let a = this.valueOf();
    return a>b?1:-1;
}
let a =  'sdddfdf';
a.compare('fdf');
let b=undefined;
console.log(a.compare('fdf'));
console.log(a.compare(null));
