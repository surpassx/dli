## 2）创建相关目录

```bash
[root@vm_10_14_centos gitlab]# mkdir /opt/gitlab/{config,data,logs} -p
[root@vm_10_14_centos gitlab]# ls -l /opt/gitlab/
total 12
drwxr-xr-x 2 root root 4096 Dec  8 11:35 config
drwxr-xr-x 2 root root 4096 Dec  8 11:35 data
drwxr-xr-x 2 root root 4096 Dec  8 11:35 logs
```

## 拉取gitlab中文版镜像

```bash
[root@vm_10_14_centos gitlab]# docker pull twang2218/gitlab-ce-zh:11.1.4
11.1.4: Pulling from twang2218/gitlab-ce-zh
8ee29e426c26: Pull complete 
6e83b260b73b: Pull complete 
e26b65fd1143: Pull complete 
40dca07f8222: Pull complete 
b420ae9e10b3: Pull complete 
a218309dd589: Pull complete 
5c60fd7ba0ce: Pull complete 
659c2144b5a3: Pull complete 
8289bbac0d0e: Pull complete 
31bbd150e8a7: Pull complete 
9114e78243fa: Pull complete 
0b97fa2153bc: Pull complete 
308c7e15be6a: Pull complete 
b7f31b8e487d: Pull complete 
cbbb6dec5000: Pull complete 
0241c9ad6a16: Pull complete 
7fa6f0b53edd: Pull complete 
1c2861e152b2: Pull complete 
0536f3466f66: Pull complete 
Digest: sha256:3c2372e3285e6d6933ddebb5ee3ae0c4bbf7cb235084e54d33d7f0ddf4813c4a
Status: Downloaded newer image for twang2218/gitlab-ce-zh:11.1.4
[root@vm_10_14_centos gitlab]# docker image ls
REPOSITORY               TAG                 IMAGE ID            CREATED             SIZE
twang2218/gitlab-ce-zh   11.1.4              1935cc9f8798        4 months ago        1.61G
```

## 启动gitlab的容器

```bash
[root@vm_10_14_centos gitlab]# docker-compose up -d
Creating network "gitlab_default" with the default driver
Creating gitlab ... error

ERROR: for gitlab  Cannot start service gitlab: b'driver failed programming external connectivity on endpoint gitlab (9308ca74b8491c556263eac9fb9b0abcb25258d9e2df5733fc4d9143d6b18dcc): Error starting userland proxy: listen tcp 0.0.0.0:22: bind: address already in use'

ERROR: for gitlab  Cannot start service gitlab: b'driver failed programming external connectivity on endpoint gitlab (9308ca74b8491c556263eac9fb9b0abcb25258d9e2df5733fc4d9143d6b18dcc): Error starting userland proxy: listen tcp 0.0.0.0:22: bind: address already in use'
ERROR: Encountered errors while bringing up the project.
   
[root@vm_10_14_centos gitlab]# vim /etc/ssh/sshd_config 
[root@vm_10_14_centos gitlab]# systemctl restart sshd
[root@vm_10_14_centos gitlab]# netstat -tulnp |grep 22
tcp        0      0 0.0.0.0:60022           0.0.0.0:*               LISTEN      4044/sshd  
```

> 这里需要注意的是，由于gitlab容器需要用到22端口，不能与宿主机冲突，这里需要修改宿主机的sshd服务的监听端口

```shell
[root@vm_10_14_centos gitlab]# docker-compose ps
Name Command State Ports
------------------------------------------------------------------------------
------------------------
gitlab /assets/wrapper Up (healthy) 0.0.0.0:22->22/tcp, 0.0.0.0:443-
>443/tcp, 0.0.0.0:80->80/tcp
```

> gitlab设置开机启动

```shell
[root@vm_10_14_centos gitlab]#  chmod +x /etc/rc.local
[root@vm_10_14_centos gitlab]# ls -l /etc/rc.local
lrwxrwxrwx. 1 root root 13 Jul 7 16:43 /etc/rc.local -> rc.d/rc.local
[root@vm_10_14_centos gitlab]# echo "cd /root/gitlab && docker-compose up -d" >>
/etc/rc.local
[root@gitlab gitlab]# tail -1 /etc/rc.local
cd /root/gitlab && docker-compose up -d
```

# （6）gitlab管理界面

```bash
地址：http://129.204.133.242

账号：root

密码：首次登陆设置
```





