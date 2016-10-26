const http=require('http');
const fs=require('fs');
http.createServer(function(req,res){
    fs.createReadStream('./index.html').pipe(res)
});