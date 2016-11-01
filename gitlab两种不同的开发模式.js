工作流程1：
先要 fork 代码到自己的私有仓库上
然后git clone  
可以创建一个分支，也可以不创建分支 
然后在自己的私有仓库进行新功能的开发或 Bug 的修复


然后提交到自己仓库 发送merge request 到 主仓库到 的dev分支
可以 从自己的dev分支到 人家的dev分支

这种情况下 别人的仓库永远不可能直接提交，但是假如别人先 merge request的话，就需要怎么做不会

第二种：

现在就一个仓库，就是别人的仓库，然后git clone 有两个  master dev 
情况1:clone 下来的代码之后master 这样的话 我们自己创建dev  然后

git checkout dev 
 dev:  git rebase master 
get rebase --abort 处理冲突

最有在dev上开发  这样 可以保证 mater上永远是最新

开发完之后 git checkout master  git merge dev 
运行  ok
当然 这边也会需要处理 冲突 
 git push
