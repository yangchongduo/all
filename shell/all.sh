#!/usr/bin/env bash
string="yangchongduo"
echo `expr index ${string} a`
echo "字符串的长度: ${#string}"
echo "my name is ${string}"
ary=(
"value0"
"value1"
"value2"
)

for item in ${ary[*]}; do
 echo ${item}
done
echo "数组的长度 ${#ary[*]}"
#函数
num1=100
num2=200
funWithParams(){
echo "所有参数的个数  :$#"
echo "参数以字符串的形式存在 $*"
data=`expr ${1} \* ${2}`
return $((${data}))
}
funWithParams 10 7
echo "得到的结果是 $?"
# if else lt gt eq ne  || && [][] -o -a  test
if test $[num1] -eq $[num2]; then
    echo "相等输出的"
    else
    echo "不想的输出的"
fi
if [ ${num1} -lt ${num2} ]; then
     echo "gt输出的"
    else
    echo "不想的输出的"
fi