var tree = {
    value: 12,
    left: {
        value: 2,
        left: {
            value: 4
        }
    },
    right: {
        value: 3,
        left: {
            value: 5,
            left: {
                value: 9
            },
            right: {
                value: 8
            }
        },
        right: {
            value: 6
        }
    }
}
var levelOrderTraversal = function(node) {
    if(!node) {
        throw new Error('Empty Tree')
    }
    var que = []
    que.push(node)
    while(que.length !== 0) {
        node = que.shift();
        console.log('node.value--->',node.value)
        if(node.left) que.push(node.left)
        if(node.right) que.push(node.right)
    }
}
levelOrderTraversal(tree)
/*var preOrder = function (node) {
    if (node) {
        console.log(node.value);
        preOrder(node.left);
        preOrder(node.right);
    }
}
 preOrder(tree)
*/
/*
var inOrder = function (node) {
    if (node) {
        inOrder(node.left);
        console.log(node.value);
        inOrder(node.right);
    }
}
inOrder(tree)*/
