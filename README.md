NSBBS
=

## 介绍

NSBBS是经由Nodeclub的源代码开发而来。

## 安装部署

*不保证 Windows 系统的兼容性*

```
1. 安装 `Node.js[必须]` `MongoDB[必须]` `Redis[必须]`
2. 启动 MongoDB 和 Redis
3. `$ make install` 安装 Nodeclub 的依赖包
4. `cp config.default.js config.js` 请根据需要修改配置文件
5. `$ node app.js`
6. visit `http://localhost:3000`
7. done!
```

## License

MIT
