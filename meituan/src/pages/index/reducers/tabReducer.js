import {ADD_TODO} from '../actions/actionType'

const addTodo = (state, actions) => {
  let objNum =  actions.obj.objNum
  let num = state.num
  return {
    num: num + objNum
  }
}

const tabReducer = (state={num:0}, action) => {
  switch(action.type) {
    case ADD_TODO: return addTodo(state, action)
    default: return state
  }
}

export default tabReducer