import axios from 'axios'
// 开发环境直接走 /api/的路径即可 开发环境会自动代理到本地后端 http://localhost:7006 
const baseURL = process.env.NODE_ENV === 'production' ? 'https://team.nnleo.cn' : ''

// 暂时保留对token的支持
let token = localStorage.getItem('team-token')
let instance = axios.create()
instance.defaults.timeout = 30000
instance.defaults.headers.token = token
instance.defaults.headers.leo = 'team-token'

instance.interceptors.request.use((config) => {
  if (config.url && config.url.charAt(0) === '/') {
    config.url = `${baseURL}${config.url}`;
  }
  if (token) {
    config.headers.token = token
  } else {
    // 跳转到登录页面
    config.headers.token = 'none'
    console.log('没有token 触发重新登录')
    // location.replace(`${location.origin}/login`)
  }
  return config
})
instance.interceptors.response.use(
  (response) => {
    if (200 <= Number(response.status) < 300) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  (error) => {
    // 红色的状态码一律走这里 这里的具体状态码需要和后端约定好
    if (error.response) {
      // cookie 不通过前后端约定好固定的状态码来触发前端的登录操作
      switch (Number(error.response.status)) {
        case 401:
          console.log('err 返回 401 清除token信息并跳转到登录页面')
          break
        case 403:
          console.log('err 返回 403 清除token信息并跳转到登录页面')
          break
      }
    }
    return Promise.reject(error)
  }
)
export default instance

