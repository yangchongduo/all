package main

import "fmt"
// 定义结构体 定义类型
type books struct {
	title string
	id    int
}

func main() {
	var book1 books
	book1.title = "react"
	book1.id = 99
	computed(book1)
	computedIndex(&book1)
}
func computed(book books) {// book 是参数
	fmt.Printf("字符串的 是使用 %s \n", book.title)
	fmt.Printf("数字是使用的是 %d \n",book.id)
}
// 根据指针获取的数据是 *指针    &数据 就是获取内存指针
func computedIndex(book *books)  {
	fmt.Printf("使用字符传 %s \n",book.title)
	fmt.Printf("使用字符传 %d \n",book.id)
	println("通过println是不能通过 %s %d *指针 &数据(获取指针的)")
}