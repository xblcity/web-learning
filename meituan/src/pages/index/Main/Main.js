import React from 'react'
import {connect} from 'react-redux'

import {addTodo} from '../actions/tabAction'

const Main = (props) => {
  function onAddNum() {
    props.dispatch(addTodo({
      objNum: 5
    }))
  }
  return <div onClick={onAddNum}>{props.num}</div>
}

export default connect(
  state => ({
    num: state.tabReducer.num
  })
)(Main)