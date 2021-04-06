### 本地安装Kong

```shell
cd 当前目录
docker-compose up -d
```

```shell
# konga地址
http://localhost:1337
# 测试kong是否安装成功
curl localhost:8001
```

```shell
#Kong Admin URL
http://kong:8001
```

```shell
 sudo killall - HUP mDNSResponder
```

```shell
 # mac 查看公钥
 cat  ~/.ssh/id_rsa.pub
```
