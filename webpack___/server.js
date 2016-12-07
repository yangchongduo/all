var  express = require('express');
var  path = require('path');
var app = express();
app.use(express.static(path.resolve('build')));
app.get('/api/users',function(req,res){
    res.send([{id:1,name:'ycd'}]);
});
app.get('/users.json',function(req,res){
    res.send([{id:1,name:'ycd'}]);
});
app.listen(9090);