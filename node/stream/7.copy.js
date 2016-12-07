var fs = require('fs');
// 之前有两个 方法 同步的读取文件 readFile writeFile readFileSync writeFileSync
// createReadStream createWriteSteam
function copy(source,target){
    var rs = fs.createReadStream(source);
    var ws = fs.createWriteStream(target);
    rs.pipe(ws);
}
copy('./hello.png','./world.png');







