import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import FrameWork from '@/pages/frame-work/index'
import Login from '@/pages/login/index'
import NoneMatch from '@/pages/none-match/index'

export default () => (
  <Router>
    <Switch>
      <Route strict path="/index" component={FrameWork}>
      </Route>
      <Route path="/login" component={Login}></Route>
      <Route component={NoneMatch}></Route>
    </Switch>
  </Router>
)