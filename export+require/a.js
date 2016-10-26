
function Person() {
    this.name='ycd'
}
/*Person.prototype.smlie=()=>{
    console.log('smile')
}*/
Person.prototype.smlie=function () {
    console.log('smlie')
}
module.exports=Person;
/*
module.exports = Person*/
