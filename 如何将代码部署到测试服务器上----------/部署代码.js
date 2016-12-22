测试环境：需要到测服务器上，有一个域名，
通常所说的部署就是部署到测试服务器上
问题是如何部署：




//---------xshell---------------
这个软件 可以  看来部署都是靠软件部署的
我们提交代码到gitlab，然后弄个计划任务，然后不断的pull最新的代码 这个可以 
然后通过命令行输入 进行发布



现在是部署到测试服务上
用jenkin
这是一种基于java 环境自动集成化的部署的工具  不同于 xshell 他说是  ptf的 我也不懂



ok  已经成功了
第一步https://jenkins.io/index.html 去下载war的软件
第二部  下载一个jdk 
第三部 配置环境变量   两个系统变量
可以输入cmd  里面看 Java配置成功了吗
新建系统变量JAVA_HOME 和CLASSPATH 
变量名：JAVA_HOME 
//  记住这个位置是 你安装的jdk的路径 其中变量值为你自己安装jdk的文件目录这里要注意。
变量值：C:\Program Files\Java\jdk1.7.0
变量名：CLASSPATH 
变量值：.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;

我操作的这个成功的  ;D:\Java\jdk1.8.0_111\bin
变量名：Path    
变量值：%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;(这个没有尝试)


最后java -jar jenkins.war
然后  localhost:8080 打开就可以了


http://updates.jenkins-ci.org/download/plugins 插件

安装jenkins插件有两种方法,一种是在线安装,一种是离线安装.两种方式介绍如下:
1.如果服务器可以上网,那边选择在线安装最好不过了,安装流程为:
系统管理----插件管理---选择需要的插件直接安装即可
2.如果服务器不能上网,那么就只能离线安装,首先去
http://updates.jenkins-ci.org/download/plugins/
下载需要的plugin,选择匹配的版本号,下载到本地,然后打开:
系统管理---插件管理—高级---找到”上传插件”(浏览,找到扩展名为.hpi的插件，上传之后默认直接就安装了
	。重启jenkins，安装的插件就可以使用了


安装jenkins后“可选插件”列表为空
选择插件管理-高级-升级站点-更改URL为
[http://mirror.xmission.com/jenkins/updates/update-center.json]-点击提交即可

密码忘了:http://yyyummy.blog.51cto.com/8842100/1567378