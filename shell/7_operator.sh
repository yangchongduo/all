#!/usr/bin/env bash
a=10;
b=30;
# 谨记就是 没有等号 "=" 是没有空格的
data=`expr ${a} + ${b}`
echo ${data}
string="yangchongduo"
echo "字符串的个数: ${#string}"
#获取字符串的索引
echo `expr index ${string} a`
ary=(
"value0"
"value1"
"value2"
"value3"
)
echo "数组的个数是:${#ary}"
for item in ${ary[*]};do
 echo "数组的每一项是:${item}"
done
#下面的是处理的是 逻辑运算符 *是需要转移的  \\\\\\\\\\\\\\
val=`expr ${a} \* ${b}`
echo "相乘是需要转义的 ${val}"
val=`expr ${b} / ${a}`
echo "相除是:${val}"
val=`expr ${b} % ${a}`
echo "这是求余数:${val}"
if [ ${a} == ${b} ];then
    echo "a和b是相等的"
fi
if [ ${a} != ${b} ];then
    echo "a和b是不相等"
fi
# 开始使用 字符操作 -eq(相等)  -ne(不相等)
if [ ${a} -ne ${b} ]; then
    echo "我是通过-ne(不相等)"
    else
    echo "想等的"
fi
if [ ${a} -gt ${b} ]; then
    echo "我是-gt大于过来的"
    else
    echo "gt是大于的意思"
fi
# -o 是or -a是all 和|| && 意思一样但是写法不一样
if [ $a -lt 100 -o $b -gt 100 ]
then
   echo "$a -lt 100 -o $b -gt 100 : 返回 true"
else
   echo "$a -lt 100 -o $b -gt 100 : 返回 false"
fi
# 是两个中括号[][]
if [[ $a -lt 100 || $b -gt 100 ]]
then
   echo "返回 true"
else
   echo "返回 false"
fi

