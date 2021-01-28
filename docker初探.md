```
# 容器的概念
生成镜像文件

安装
brew cask install docker

容器的增删查

启动一个Nginx的镜像，官方名叫nginx，如果本地没有该镜像会自动拉取再启动，不启动--rm的每次启动都会创建一个新的容器

$ docker container run nginx

使用 -d 可设置容器在后台运行
$ docker container run -d nginx

添加 -a 列出所有容器
默认只列出本机正在运行的容器
$ docker ps -a

CONTAINER ID        IMAGE               COMMAND                  CREATED              STATUS                      PORTS               NAMES
9752e761d34d        nginx               "nginx -g 'daemon of…"   32 seconds ago       Exited (0) 22 seconds ago                       brave_noether




```
参考文档：

https://daief.tech/2019-07-01/getting-started-with-docker.html