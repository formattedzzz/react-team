const Router = require('koa-router') 
const routers = new Router()
const home = require('./home')

routers.use('/home', home.routes(), home.allowedMethods())

module.exports = routers