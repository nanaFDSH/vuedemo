# docker文档

查看系统镜像
```
docker images
```
查看运行中的容器
```
docker ps
```
查看所有的容器（包括未运行的容器）
```
docker ps -a
```
删除系统镜像
```
docker rmi 镜像名字或者镜像id
```
删除容器
```
docker rm 容器id或者容器名字
```
启动、重启、停止容器
```
docker start/restart/stop 容器id或者容器名字
```
拉取自己的镜像
```
docker pull registry.cn-hangzhou.aliyuncs.com/wnn/vuedemo:1.1.0
```
运行自己的容器
```
docker run -it -v /Users/wnn/Desktop/gitlab/vuedemo/:/myvuetest -p 127.0.0.1:8080:8080  5327af3e5bbb bash
-it 交互模式
－p 映射端口
－v 映射文件夹
5327af3e5bbb  镜像id或者镜像名字（mydocker/vuedemo）
bash  启动容器后执行的命令
```
提交容器修改到自己的镜像
```
docker commit 3be4 mydocker/vuedemo
3be4 容器id或者容器名字
mydocker/vuedemo  自己取的镜像名字
即把容器修改提交到自己的镜像里面
```
给自己的镜像打标签
```
docker tag mydocker/vuedemo registry.cn-hangzhou.aliyuncs.com/wnn/vuedemo:1.1.0
docker tag 镜像名字 镜像仓库：版本号
```
提交自己的镜像到docker仓库
```
docker push registry.cn-hangzhou.aliyuncs.com/wnn/vuedemo:1.1.0
```
如果需要登陆
```
docker login --username=用户名 registry.cn-hangzhou.aliyuncs.com
```




