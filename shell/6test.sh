#!/usr/bin/env bash
name="yangchongduo"
echo ${name}
echo "my name is ${name}"
# 记住这$ 后面这个是变量  因为这个是name 所以我们才是name 以下 两种方式都是可以的
echo `expr index $name a`
echo `expr index "$name" a`

