const Router = require('koa-router')
const home = new Router()

home.get('/leo', async ( ctx )=>{
  // ctx.type = 'html'
  // 设置content-type的简写
  let html = `
    <h1>koa2 request post demo</h1>
    <form method="POST" action="/home/bob">
      <p>userName</p>
      <input name="userName" /><br/>
      <p>nickName</p>
      <input name="nickName" /><br/>
      <p>email</p>
      <input name="email" /><br/>
      <button type="submit">submit</button>
    </form>
  `
  ctx.body = html
  log.info(ctx.store)
  console.log(ctx.session)
})

home.post('/bob', async ( ctx )=>{
  // let postData = ctx.request.body
  // console.log(ctx.request)
  ctx.body = {name: 'jjjj'}
  // ctx.store.name = 'chenlei'
  // let url = ctx.url
  // // 从上下文的request对象中获取
  // let request = ctx.request
  // let req_query = request.query
  // let req_querystring = request.querystring
  // // 从上下文中直接获取
  // let ctx_query = ctx.query
  // let ctx_querystring = ctx.querystring
  // ctx.body = {
  //   url,
  //   req_query,
  //   req_querystring,
  //   ctx_query,
  //   ctx_querystring
  // }
})

// 登录的流程 首先用户没有登录 没有cookie 会走!ctx.session.user_id
// 然后触发登录 这一步前后端出发均可 后端触发 ctx.redirect('https://wx.nnleo.cn/login')
// 前端触发 后端返回固定状态码 再让前端跳转到登录页面
// login API 里面的话 登录业务完成就调用 ctx.session = {} 即可返回对应的session_id存在cookie里面
// 浏览器再次请求时就能直接拿ctx.session来识别用户信息了

module.exports = home