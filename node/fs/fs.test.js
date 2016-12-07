var fs=require('fs');
var flag=fs.existsSync('./1.txt');
console.log(flag);
var result=fs.statSync('./1.txt');
//console.log(result);
var res=fs.statSync('./5.js')
//console.log(res)
//mtime 是创建的 这个文件的时间 个人认为和 new Date().getTime()  Date.now();
if (result.mtime<res.mtime){
    console.log('fs.exit是退出的意思 existsSync返回true和false existsSync statSync')
}
// 会产生文件 这个
fs.writeFileSync('ycd.js','天使','utf-8')
/**
 { dev: 1023211575,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: undefined,
  ino: 281474977596183,
  size: 12,
  blocks: undefined,
  atime: 2016-10-23T11:40:11.885Z,
  mtime: 2016-10-23T03:32:00.789Z,
  ctime: 2016-10-23T11:40:11.885Z,
  birthtime: 2016-10-23T11:40:11.885Z }
 */


