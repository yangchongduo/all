图必须在会话的时候启动，会话讲图的op分发到cpu上
的设备上，同时提供执行op的方法
op是节点，op有方法，讲产生tensor(数据)
返回
在window系统下 安装完之后 就直接 安装 python 之后直接pip install tensorflow 就可以了
现在已经支持源码安装了

总结: 也就是我们需要下先去创建op 点为了能都得到真真的 数据tensor我们需要启动图 也就是 graph 但是graph需要在回话中
启动, 启动完之后关闭
