package main

import "fmt"
import "unsafe"

func init() {
	println("woshi ycd")
}

/*
func main() {
	const LENGTH int = 10//在程序运行时，不会被修改的量。
	const WIDTH int = 5
	var area int
	const a, b, c = 1, false, "str" //多重赋值

	area = LENGTH * WIDTH
	fmt.Printf("面积为 : %d", area)
	println()
	println(a, b, c)
}
*/
//面积%!(EXTRA int=50)
const (// 显示申明变量
	a ="string"
	b=len(a)
	c=unsafe.SizeOf(a)
)
func main() {
	const LENGTH int =10
	const WIDTH int =5
	var area int
	area=LENGTH * WIDTH
	fmt.Printf("面积 : %d",area)//占位符吗?
	fmt.Printf(a,b,c)
}