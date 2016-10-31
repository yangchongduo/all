/*当事情变得非常复杂的时候
如果你发现在单个scripts条目中塞了一大堆命令，那你可以考虑重构一下，把一些命令放到别的地方，比如/bin。

你可以用任何语言编写这个脚本，比如bash、node或perl。*/
//只需要在脚本上加上合适的#!行。还有，别忘了chmod +x。

只需要将脚本放到 ./node_module/.bin/ 目录下即可，命令会在 这个目录 下自动寻找对应的脚本文件。
//#! 这个 是必须加的
#!/bin/bash
(cd site/main; browserify browser/main.js | uglifyjs -mc > static/bundle.js)
(cd site/xyz; browserify browser.js > static/bundle.js)

// 部署的时候Jenkins部署的时候  这个没有用pm2 我们可以使用pm2 一起 pm2 start app.js -i 4 
这个好像是通过 Jenkins 的动作来 驱动这个基本的运行 ，现在我也写一个脚本用来自动提交的 肯定还是需要用到 scripts里面的东西
#!/bin/sh
# npm uninstall
npm install --registry http://r.cnpmjs.org
    npm run compile:prod

// 这是自动体提交的脚本 不知道这个加不加 应该加吧 问题是放在哪 可以尝试一下
/*
git add--all
git commit-m"common commit"
git push
*/
