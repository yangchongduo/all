//定义每个节点的模型，每个节点都分中心节点，左右节点三个节点，节点也可能成为树
function arrayAct() {
    this.value = null;
    this.left = null;
    this.right = null;
}
/*
 *拿数组的第一个数据作为根节点，下面的每个节点都是一个新的对象，分别以不同的中心节点
 *判断左右节点的归属，最后形成一个二叉树
 */
arrayAct.prototype.add = function (data) {
    if (!data) {
        return;
    }
    if (this.value == null) {
        this.value = data;
        return;
    }
    //定义最中心的中心节点
    var code = new arrayAct();
    code.value = data;
    if (this.value >= data) {
        if (this.left == null) {
            this.left = code;
        } else {
            this.left.add(data);
        }
    } else {
        if (this.right == null) {
            this.right = code;
        } else {
            this.right.add(data);
        }
    }
}
arrayAct.prototype.print = function (data) {        //递归采用栈的方式存储，所以会循环调用
    if (this.left) {
        //console.log(this)
        this.left.print(data);
    }
    data.push(this.value);
    if (this.right) {
        //console.log(this)
        this.right.print(data);
    }
}
function app() {
    var array = [2, 6, 56, 102, 5, 4, 47, 7000, 200, 45, 24, 85, 63, 954, 6222, 5],
        re = [];
    sortArray = new arrayAct();
    for (var i = 0; i < array.length; i++) {
        sortArray.add(array[i]);
    }
    //console.log(sortArray)
    sortArray.print(re);
    console.log(re)
}
app();