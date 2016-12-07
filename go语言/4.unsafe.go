package main
import "unsafe"
const (
	a="string"
	b=len(a)// 这个是字节的长度
	c=unsafe.Sizeof(a)//大小 不知道为什么是16
)
func main() {
	println(a,b,c)
}