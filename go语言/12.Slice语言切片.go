package main

import "fmt"

func main() {
	/* 创建切片 */
	numbers := []int{0,1,2,3,4,5,6,7,8}
	//var numbers=[0,1,2,3,4,5,6,7,8] int 错误的
	printSlice(numbers)

	/* 打印原始切片 */
	fmt.Println("numbers ==", numbers)

	/* 打印子切片从索引1(包含) 到索引4(不包含)*/
	fmt.Println("numbers[1:4] ==", numbers[1:4])

	/* 默认下限为 0*/
	fmt.Println("numbers[:3] ==", numbers[:3])

	/* 默认上限为 len(s)*/
	fmt.Println("numbers[4:] ==", numbers[4:])
	/* 创建子切片 */
	numbers1 := make([]int,0,5)
	printSlice(numbers1)

	/* 打印子切片从索引  0(包含) 到索引 2(不包含) */
	number2 := numbers[:2]
	printSlice(number2)

	/* 打印子切片从索引 2(包含) 到索引 5(不包含) */
	number3 := numbers[2:5]
	printSlice(number3)

}

func printSlice(x []int){//传入的类型 数组
	fmt.Printf("len=%d cap=%d slice=%v\n",len(x),cap(x),x)
}
//执行以上代码输出结果为：
/*
Go 数组的长度不可改变 所有有了slice的概念 切片 通过make函数生成切片
*/