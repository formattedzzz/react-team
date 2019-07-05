const {log, errlog} = require('./utils/logger')
global.log = log
global.errlog = errlog

const Koa = require('koa')
const app = new Koa()
const routers = require('./router')
const Static = require('koa-static')
const staticPath = './static'
const path = require('path')
const bodyParser = require('koa-bodyparser')
const config = require('./config')
const session = require('koa-session-minimal')
const MysqlSession = require('koa-mysql-session')

app.context.store = {}

let store = new MysqlSession({
  user: config.user,
  password: config.password,
  database: config.database,
  host: 'localhost',
})
let cookie = {
  maxAge: 3600 * 1000 * 24 * 7,
  expires: '',
  path: '/',
  domain: '',
  httpOnly: '',
  overwrite: '',
  secure: '',
  sameSite: '',
  signed: '',
}
app.use(session({
  key: 'session_id',
  store: store,
  cookie: cookie
}))
app.use(async (ctx, next) => {
  // console.log(ctx.session)
  console.log('session中间件')
  if (!ctx.session || !ctx.session.user_id) {
    console.log('没有cookie 没有找到该用户session')
    ctx.session = {
      user_id: `leo${Math.random().toString(36).substr(2)}`,
      // user_id: 'leoamffrz1741v',
      name: 'leooo',
      avatar: 'https://wx.nnleo.cn/avatar1.jpg',
      info: 1
    }
  } else {
    console.log('有cookie 该用户user_id', ctx.session.user_id)
    ctx.session.info++
    // ctx.session = ctx.session
  }
  await next()
})
app.use(bodyParser())
app.use(routers.routes()).use(routers.allowedMethods())
app.use(Static(path.join(__dirname, staticPath)))

app.listen(config.port, () => {
  console.log('server is runing at port ' + config.port)
})
app.on('error', err => { errlog.error(err) })
// app.listen 就是下面代码的语法糖
// const http = require('http');
// const Koa = require('koa');
// const app = new Koa();
// http.createServer(app.callback()).listen(3000);

