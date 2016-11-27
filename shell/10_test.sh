#!/usr/bin/env bash
num1=100
num2=100
if test $[num1] -eq $[num2]
then
    echo '两个数相等！'
else
    echo '两个数不相等！'
fi
num1=100
num2=200
# 奇怪了 [] 和{}取变量是一个效果
if  [ $[num1] -eq $[num2] ]; then
    echo "是通过test"
    else
    echo "和[]的功能差不多"
fi
# 谨记： 不要忘了 有空格
if  [ ${num1} -eq ${num2} ]; then
    echo "是通过test"
    else
    echo "和[]的功能差不多"
fi
# elif语句
a=10
b=20
if [ $a == $b ]
then
   echo "a 等于 b"
elif [ $a -gt $b ]
then
   echo "a 大于 b"
elif [ $a -lt $b ]
then
   echo "a 小于 b"
else
   echo "没有符合的条件"
fi
#一般和test 语法使用
if test $a -eq $b;
    then
      echo "是不想的"
    elif test $a -lt $b
    then
       echo "我是连续的 后面必须要有else"
    else
      echo "我是最后的else"
fi

