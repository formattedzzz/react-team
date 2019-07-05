import React, {Component} from 'react'
import { Layout, Menu, Icon } from 'antd'
import {Link} from 'react-router-dom'
import TeamMember from '@/pages/team-member'
import ProjectList from '@/pages/project-list'
import User from '@/pages/user'
import NoneMatch from '@/pages/none-match'
import {Route, Switch} from 'react-router-dom'
import './index.styl'
const { Header, Sider, Content } = Layout

class FrameWork extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }
  UNSAFE_componentWillMount () {
    // if (localStorage.getItem('team-token')) {
    //   console.log(this.props)
    // }
    console.log(this.props)
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <Layout className="frame-work">
        <Sider breakpoint="sm" collapsedWidth={0} trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link className="menu-link" to="/index/project">
                <Icon className="menu-icon" type="weibo" />
                <span>我参与的项目</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link className="menu-link" to="/index/members">
                <Icon className="menu-icon" type="wechat"/>
                <span>所有相关成员</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link className="menu-link" to="/index/user">
                <Icon className="menu-icon" type="qq" />
                <span>任务统计</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Header>
            <Icon
              className="trigger toggle-icon"
              type={this.state.collapsed ? "right-circle" : "left-circle"}
              onClick={this.toggle} 
            />
          </Header>
          <Content>
            <Switch>
              <Route path="/index/project" component={ProjectList}></Route>
              <Route path="/index/members" component={TeamMember}></Route>
              <Route path="/index/user" component={User}></Route>
              
              <Route component={NoneMatch}></Route>
            </Switch>
          </Content>
        </Layout>

      </Layout>
    )
  }
}
export default FrameWork