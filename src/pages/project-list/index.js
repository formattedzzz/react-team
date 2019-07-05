import React, { Component } from 'react'
import {observer, inject} from  'mobx-react'
import './index.styl'

@inject('appstore')
@observer
class Work extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    let {appstore} = this.props
    return (
      <div>
        <div style={{background:'#e80',fontSize:'40px',height:'400px'}}>workhhhhh</div>
        <div id="anchor" style={{height: '1000px',background: '#ccc'}}>
          1236666666
          {JSON.stringify(appstore.todotext)}
        
        <button onClick={() => {console.log('---'); appstore.store.todos.push(Math.random().toFixed(2)) }}>
          add
        </button>
        </div>
      </div>
    )
  }
}
export default Work