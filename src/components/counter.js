import React, {Component} from 'react'
import PropType from 'prop-types'
// import { dispatch } from 'redux'
import {connect} from 'react-redux'
import {addAction, tabAction} from '@/redux/action/index'
// 展示组件
class CounterUI extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name2: this.props.name
    }
    console.log(this.props)
    this.handlePatch = this.handlePatch.bind(this)
  }
  handlePatch (e, txt) {
    console.log(e)
    // e.persist()
    // e.nativeEvent.stopImmediatePropagation()stopPropagation
    e.stopPropagation()
    let {dispatch} = this.props
    dispatch(tabAction(txt))
  }
  render () {
    // console.log(this.props)
    const { value, onAddClick, name, age, tab} = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onAddClick}>Add</button>
        <div>
          自己的属性name: {name + age} <br/>
          name2: {this.state.name2}
        </div>
        {tab}
        {
          new Array(4).fill(1).map((v, idx) => {
            let txt = 'tab' + Number(idx + 1)
            return (<button onClick={(e) => this.handlePatch(e, txt)} key={idx}>
              {txt}
            </button>)
          })
        }
      </div>
    )
  }
}
CounterUI.propTypes = {
  value: PropType.number.isRequired,
  onAddClick: PropType.func.isRequired
}
function mapStateToProps (state, ownProps) {
  let { name, age } = ownProps
  console.log('redux:', state)
  console.log('own:', ownProps)
  return {
    value: state.counterState.count,
    name,
    age,
    tab: state.tabState
  }
}
function mapDispatchToProps (dispatch) {
  return {
    onAddClick: () => dispatch(addAction),
    dispatch
  }
}
// 容器组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterUI)