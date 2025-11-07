# Git学习笔记
## 一、什么是Git? 为什么需要它
**Git 就是一个帮你解决这个问题的“时光机器”和“存档管理器”。**
- 版本控制：它能记录你对文件的所有修改历史。你可以回到任何一个历史时刻。
- 协作：多人共同开发一个项目时，Git 能优雅地合并每个人的代码，避免混乱。
## 二、核心操作
1. 仓库（Repository）：就是一个被 Git 管理的文件夹。里面所有文件的修改、删除，Git 都能跟踪。
2. 工作区（Working Directory）：就是你电脑上能看到的那个项目文件夹。
3. 暂存区（Staging Area）：一个“准备区”。你把想要提交的文件放这里，表示“这些改动我下次要存档”。
4. 提交（Commit）：将暂存区的内容正式保存到仓库中，生成一个“存档点”（版本）。每次提交都有一个唯一的 ID。
5. 分支（Branch）：可以理解为一条独立的时间线。默认的主线叫 main 或 master。你可以在新的分支上开发新功能，而不会影响主线。
## 三、本地仓库基本操作
1. 创建仓库
```bash
在你项目的根目录下，打开终端（命令行），执行：
git init
这个命令会创建一个隐藏的 .git 文件夹，它就是你的本地仓库。
```
2. 查看状态
```bash
git status
这是你最常用的命令之一！ 它会告诉你哪些文件被修改了，哪些文件在暂存区。
```
3. 添加文件到暂存区
```bash
# 添加单个文件
git add 文件名.txt

# 添加所有变化的文件（新建、修改、删除）
git add .

# 添加所有 .js 结尾的文件
git add *.js
```
4. 提交到仓库
```bash
git commit -m "这里写本次提交的说明"
提交说明非常重要！ 一定要简单清晰地描述这次提交做了什么，例如：“修复了登录按钮点击无效的bug”、“新增了用户头像上传功能”。

流程图： 工作区 --(git add)--> 暂存区 --(git commit)--> 仓库
```
5. 查看提交历史
```bash
git log
这会显示所有提交的记录，包括作者、日期和提交说明。按 q 键可以退出。
```
## 四、远程仓库（和他人协作/备份代码）
- 远程仓库通常放在 GitHub、Gitee（码云） 或 GitLab 等平台上。
1. 克隆远程仓库
如果你要参与一个已存在的项目，第一步是把它“下载”到本地。
```bash
git clone 远程仓库地址
# 例如：git clone https://github.com/username/project.git
```
2. 推送本地更新到远程
当你在本地完成了 commit 后，需要将更新推送到远程仓库。
```bash
git push origin main
# 如果你的默认分支叫 master，则用：git push origin master
```
3. 拉取远程更新到本地
当别人更新了远程仓库，你需要把最新的代码“拉取”到本地。
```bash
git pull origin main
# 这相当于执行了 git fetch（获取） 和 git merge（合并） 两个操作
```
## 五、分支
1. 创建并切换分支
假设你要开发一个新功能 feature-A。
```bash
# 创建并切换到新分支
git checkout -b feature-A
# 更现代的命令（效果相同）
git switch -c feature-A
```
2. 查看分支
```bash
git branch
带 * 号的就是你当前所在的分支。
```
3. 合并分支
当 feature-A 功能开发测试完毕，你希望把它合并到主分支。
```bash
# 1. 先切换回主分支
git switch main

# 2. 将 feature-A 分支的修改合并到 main
git merge feature-A
```
4. 删除分支
功能合并后，可以删除这个特性分支。
```bash
git branch -d feature-A
```
## 六、必备速查表（常用命令总结）
|命令|	作用|
|---|------|
|git init|	初始化本地仓库
|git clone <url>|	克隆远程仓库
|git add <file>	|添加文件到暂存区
|git commit -m "msg"	|提交到仓库
|git status	|查看状态
|git log	|查看提交历史
|git push	|推送到远程仓库
|git pull	|从远程仓库拉取更新
|git checkout -b <branch>	|创建并切换分支
|git merge <branch>	|合并分支
## 出现的问题
1. 远程推送地址默认master
2. 无法传送，找不到地址
3. 仓库有其他文件，推送不了
- *此类问题尚未解决*