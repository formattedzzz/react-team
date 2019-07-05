import React, { Component } from 'react'
import {observer, inject} from  'mobx-react'
import './index.styl'
import appstore from '../../mobx';

@inject('appstore')
@observer
class Team extends Component {
  render () {
    return (
      <div style={{background:'#e80',fontSize:'40px'}}>teamhhhhh
      {JSON.stringify(appstore.store.todos)}
      </div>
    )
  }
}
export default Team