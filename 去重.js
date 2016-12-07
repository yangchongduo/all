const ary=['1','4','4','4','4','4','4','6'];
Array.prototype.unique=function () {
    const obj={};
    const ary=[]
    this.map(function (item,index) {
         item=Number(item);
        if(obj[item]!=item){
            ary.push(Number(item))
        }
        obj[item]=item
    })
    return ary
};
ary.unique();
console.log(ary.unique());

