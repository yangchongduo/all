#expr 是一款表达式计算工具，使用它能完成表达式的求值操作 expr是Expression的缩写
#!/bin/env bash
val=`expr 2 + 2`
echo $val
res=`expr 2 / 2`
echo $res
a=10;
b=10;
echo `expr $a + $b `
data=`expr $a + $b`;
echo $data