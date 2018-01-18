'use strict';

// (()=> {
//     let test_promise = new Promise((resolve, reject)=> {
//         console.log('I promise to do something...');

//         function promiseTest(value) {
//             var count = value;
//             return new Promise((resolve, reject)=> {
//                 while(count >0) {
//                     console.log(`pending times ${count}`);
//                     count--;
//                 }
//                 if (count<=0) {
//                     reject('promise failed!');
//                 }
//             });
//         }
//         setTimeout(()=> {
//             // resolve('I have done what I promised to do.');
//             resolve(promiseTest(10));
//         }, 3600);
//     });

//     test_promise.then((result)=> {
//         console.log(result);
//     },(fail)=> {
//         console.log(fail);
//     });
// })();

(()=> {
    function promiseTest(value) {
        var count = value;
        return new Promise((resolve, reject)=> {
            while(count >0) {
                console.log(`pending times ${count}`);
                count--;
            }
            if (count<=0) {
                reject('promise failed!');
            }
        });
    }
    // let test_promise_2 = promiseTest();
    promiseTest(10).then((result)=> {
        console.log(result);
    }).catch((fail)=> {
        console.log(fail);
    });
})();


