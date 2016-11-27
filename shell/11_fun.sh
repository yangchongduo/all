#!/usr/bin/env bash
#函数返回值在调用该函数后通过 $? 来获得。
# read是我们要输入的函数
funWithReturn(){
    echo "这个函数会对输入的两个数字进行相加运算..."
    echo "输入第一个数字: "
    read aNum
    echo "输入第二个数字: "
    read anotherNum
    echo "两个数字分别为 $aNum 和 $anotherNum !"
    return $(($aNum+$anotherNum))
}
funWithReturn
echo "输入的两个数字之和为 $? !"
# 使用逻辑运算符 就需要使用expr
funWithParams(){
    echo "获取的所有的参数 $# 和字符串数组获取的是长度是一样的"
    echo "第一个参数 ：${1}"
    echo "第二个参数 ：${2}"
    echo "第三个参数 ：${3}"
    return  $((`expr ${1} \* ${2}`))
}
funWithParams 10 2 3
echo "结果是$? "