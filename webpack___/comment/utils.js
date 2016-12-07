// 把对留言的操作都封装在此对象
// 新增 删除 查询
const COMMENTS = 'comments';
module.exports = {
    //查询原来的留言列表
   list(){
       //本ls里面获取留言列表 [{id:1,username:'张三',content:'今天天气真好',time:new Date()}]
       var result = localStorage.getItem(COMMENTS);
       //获取的localStorage 获取的是字符串 和cookie好像是一样的 都是字符串
       return result?JSON.parse(result):[];
   },
    //移除留言
    remove(id){
        var comments = this.list();
        comments = comments.filter(comment => comment.id != id);
        localStorage.setItem(COMMENTS,JSON.stringify(comments));
        return comments;
    },
    //{username:'张三',content:'今天天气真好',time:Date} 增加新的留言的功能
   add(comment){
       var comments = this.list();
       //自动赋于ID号
       comment.id = comments.length>0?comments[comments.length-1].id+1:1;
       comment.time = new Date();
       comments.push(comment);
       localStorage.setItem(COMMENTS,JSON.stringify(comments));
       return comments;
   }
}