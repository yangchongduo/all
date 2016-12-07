var cp = require('child_process');
var cat = cp.spawn('cat');
cat.stdin.on('data', function(d) {
    console.log(d.toString());
});
cat.on('exit', function() {
    console.log('kthxbai');
});
cat.stdout.write('meow');
cat.stdin.end();


/*
process.stdin.on('data', function(d) {
    console.log(d);
});
/!*process.on('exit', function() {
    console.log('kthxbai');
});*!/
process.stdout.write('meow');
//cat.stdin.end();
*/
/*
process.stdin.on('data', function (chunk) {
    console.log(chunk)
    //process.stdout.write('data: ' + chunk);
});
process.stdout.write('end');
process.stdin.on('end', function () {

})*/
