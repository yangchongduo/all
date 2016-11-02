我们在sense平台，在利用pm2部署的时候Jenkins 需要连接到测试服务器，这样就可以 通过脚本部署
pm2 start app.js -i  4  这样是启动了四个进程node


安装：npm install -g pm2 
启动程序：pm2 start <app_name|id|all> -i 4 再说一次会启动 4个node进程
列举进程：pm2 list
退出程序：pm2 stop <app_name|id|all>
重起应用：pm2 restart
程序信息：pm2 describe id|all
监控：pm2 monit
实时集中log处理: pm2 log
