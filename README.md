### SDK自定义配置说明

- 放开自定义配置 **npm run eject**

- 支持stylus编译器

- 配置src源码目录别名@

- 加入react-router、axios、antd、配置按需引入

- 加入装饰器语法的支持

- 加入redux+react-redux、mobx+mobx-react两套数据管理方案 决定选用mobx 详细阅读=> /src/mobx/index.js 及相关页面 mobx的装饰器语法采用编译器提供方案

- 加入eslint配置清单

- 加入自定义eventHub(适合前端使用的发布订阅模式) 详细阅读=> /src/utils/eventHub.js

- 加入开发环境接口代理 http://localhost:7006

### 服务端目录说明

server	服务端总目录（忽略eslint）

服务端选型： koa2及其套件 (路由、静态资源托管、session+cookie机制、body解析)、socket.io

数据库操作：打算原生sql + sequelize + redis

单文件日志：log4js  服务端路径 /static/logs (gitignore) 在线访问形式 http://localhost:7006/logs/info.log 日志类型info.log、error.log

开发环境工具：nodemon

### 整体架构计划

单页应用 后面可以考虑做成多页

注册：邮箱注册

登录：用户名、邮箱登录

基本功能：teambition核心功能 + 站内通知 + 桌面端通知 + 即时消息、评论系统

其他库：react-dnd

