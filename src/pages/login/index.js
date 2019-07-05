import React, { Component } from 'react'
import './index.styl'
import HTTP from '@/utils/request'
class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLogin: true,
      username: 'leooo',
      useremail: '614791110@qq.com',
      userpass: ''
    }
  }
  componentDidMount () {
    console.log('login-page componentDidMount')
    console.log(this.props)
    HTTP({
      method: 'POST',
      url: '/home/bob',
      data: {
        name: 'leooo',
        age: 12
      }
    }).then((res) => {
      console.log(res)
    })
  }
  render () {
    return (
      <div className="login-page">
        <div className="page-con">
          <div className="panel-con sign-in">
            <input className="user-name" placeholder="输入邮箱、用户名" type="text" />
            <input className="user-pass" type="password" placeholder="输入密码" /><br/>
            <button className="login-btn">登录</button>
            <span className="login-txt">去注册</span>
          </div>
          <div className="panel-con sign-up">
            <input className="user-name" placeholder="输入邮箱、用户名" type="text" />
            <input className="user-pass" type="password" placeholder="输入密码" />
            <input className="user-pass" type="password" placeholder="确认密码" /><br/>
            <button className="login-btn">注册</button>
            <span  className="login-txt">去登录</span>
          </div>
        </div>
      </div>
    )
  }
}
export default Login