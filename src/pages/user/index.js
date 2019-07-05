import React, { Component } from 'react'
import {Prompt} from 'react-router-dom'
import './index.styl'

class User extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: 'hi leooo haha',
      useremail: '614791110@qq.com'
    }
    this.initLog = this.initLog.bind(this)
  }
  componentDidMount () {
    console.log('login-page componentDidMount')
    console.log(this.props)
  }
  initLog () {
    console.log(34)
  }
  render () {
    return (
      <div className="login-page" onClick={this.initLog}>
        这是用户中心界面<br></br>
        {this.state.username}<br></br>
        {this.state.useremail}
        <Prompt message={location => (
          // 可以传入一个函数计算出需要表达的内容
          `Are you sure you want to go to ${location.pathname}`
        )}
        ></Prompt>
      </div>
    )
  }
}
export default User