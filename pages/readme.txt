一.本地创建文件夹
2.git bush here
3.touch app.js  index.html /创建文件
4.git init  //初始化本地仓库
5.git config --gloabl user.name "leviys"  //配置用户名 可选
6.git config --gloabl user.email "leviys@163.com"  //配置邮箱 可选
7.git add index.html  //只添加这个文件到队列  git add . //将全部文件添加到队列
8.git rm --cached index.html  //将该文件从队列中删除
9.git add  *.html  //将某一类文件上传到队列
10.git commit 提交到本地仓库  //添加描述后 按esc :wq 退出
11.git commit - m '备注'


二.如何使用git 忽略不香2上传的文件
1.touch .gitignorne //创建一个忽略文件 在文件中写入要忽略文件的url 即可 /dir1

三.分支的使用
1.git branch login //创建分支
2.git checkout login //切换分支
3.分支跟主线不会有任何影响  除了整合
4.切换到主线master 再整合
5.git mergin login  整合

四.操作远程仓库
1.github创建线上仓库
2.已创建本地仓库 则直接克隆地址
3.git push -u origin master