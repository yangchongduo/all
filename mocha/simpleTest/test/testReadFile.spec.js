var fs = require("fs");
var Person=require('./person')
require("should");

describe("readFile", function() {
    it("The file content should be zhaojian", function(done) {
        fs.readFile("text.txt", "utf8", function(err, data) {
            // 就是这个eql
            data.should.eql("yangchongduo");
            done(); //这个是必须加的
        });
    });
})