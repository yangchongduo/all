package main

import "fmt"

/*func main() {
	var n [10]int *//* n 是一个长度为 10 的数组 *//*
	var i,j int

	*//* 为数组 n 初始化元素 *//*
	for i = 0; i < 10; i++ {
		n[i] = i + 100 *//* 设置元素为 i + 100 *//*
	}

	*//* 输出每个数组元素的值 主要是为了能够输出数组 *//*
	for j = 0; j < 10; j++ {
		fmt.Printf("Element[%d] = %d\n", j, n[j] )// 因为我要用 n[j]前面就需要传入j
	}
}*/
func main() {
	var n [10]int
	var i,j int
	for i=0;i<10;i++{
		n[i]=100+i
	}
	for j=0;j<10;j++{
		fmt.Printf("EL[%d]=%d \n",j,n[j])
	}
}
