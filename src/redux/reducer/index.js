import { combineReducers } from 'redux'

function counterState (state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'add':
      return { count: count + 1 }
    default:
      return state
  }
}
function tabState (state = 'tab1', action) {
  switch (action.type) {
    case 'tab':
      return action.tab
    default:
      return state
  }
}
// 通常这里是要 combineReducers 不同模块的reducer的
export default combineReducers({
  counterState,
  tabState
})