var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
mongoose.connect('mongodb://123.57.143.189/201606crawl');
//电视剧分类
exports.Category = mongoose.model('Category', new mongoose.Schema({
    name: String,//分类的名称
    url: String// 分类的url
}))
exports.Tv = mongoose.model('Tv', new mongoose.Schema({
    cid:{type:ObjectId,ref:'Category'},//外键
    name: String,//分类的名称
    url: String// 分类的url
}))