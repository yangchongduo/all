#!/usr/bin/env bash
string="yangchongduo"
echo ${string}
echo "my name is ${string}"
echo `expr index ${string} g`
ary=(
"value0"
"value1"
"value2"
"value3"
)
for item in ${ary[*]} ; do
   echo "${item}"
done
# expr 是表达式
a=20;
b=30;
data=`expr ${a} + ${b}`
echo ${data}
