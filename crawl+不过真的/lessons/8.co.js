var co = require('co');

co(function *(){
    // resolve multiple promises in parallel
    var a = Promise.resolve(1);
    var b = Promise.resolve(2);
    var c = Promise.resolve(3);
    var res = yield [a, b, c];
    console.log(res);
    // => [1, 2, 3]
})
