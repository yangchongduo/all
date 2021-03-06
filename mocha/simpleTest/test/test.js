require("should");
var name = "zhaojian";

describe("Name", function() {
    it("The name should be zhaojian", function() {
        name.should.eql("zhaojian");
    });
});

var Person = function(name) {
    this.name = name;
};
var zhaojian = new Person(name);

describe("InstanceOf", function() {
    // 是一个对象的实例
    it("Zhaojian should be an instance of Person", function() {
        zhaojian.should.be.an.instanceof(Person);
    });

    it("Zhaojian should be an instance of Object", function() {
        zhaojian.should.be.an.instanceof(Object);
    });
});
describe("Property", function() {
    it("Zhaojian should have property name", function() {
        zhaojian.should.have.property("name");
    });
});