package main

import "fmt"

func main() {
	var n int =10
	var ip *int
	var data *int
	fmt.Printf("空指针 %x\n",data)
	ip=&n //这是获取指针  取指针的代表的内容 *ip
	fmt.Printf("内存指针 %x\n",&n)//c04200e290 内存指针
	fmt.Printf("*指针变量是用来获取指针变量的所代表的功能: %d\n",*ip)
}
/*
数字是: %d
字符串: %s
指针 :%x
*/
