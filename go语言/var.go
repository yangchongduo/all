package main

import "fmt"
var x, y int
var (
	a int //int没有赋值的情况下是默认是0
	b bool//  bool的时候默认是 false
)

var c, d int =1, 2
var e,f =123,"hello"
var oo="tianshi de chi bang"//只有var后面必须有空格的其他的地方可以是没有的
func main() {
	// 这种不带申明的 只能在函数内部使用
	g,h :=123,"ycd"
	println(x,y,a,b,c,d,e,f)
	println(g,h)
	//var yy string="abc"
	println("hhhhhh")
	fmt.Println("hello, world")
}
//这个包只能是 执行函数 就是和包的名字相同的那个函数func
func data() {

}