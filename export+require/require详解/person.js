function Person(name) {
this.name=name
}
Person.prototype.smlie=()=>{
    console.log('smlie')
}
// module.exports = Person;
//module.exports=Person;
export default Person