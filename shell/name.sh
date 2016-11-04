#!/bin/sh
for skill in Ada Coffe Action Java; do
    echo "I am good at ${skill} Script"
done

# for 循环
array_name=(
value0
value1
value2
value3
)
echo "数组所有的值:  ${array_name[*]}"
echo  "数组的长度是: ${#array_name}"
# 单引号还是不行  需要使用双引号
# 下面这种循环是不行的
for item in ${array_name};do
 echo "i ${item}"
done
