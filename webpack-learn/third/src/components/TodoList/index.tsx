import React, { Component } from 'react'
import TodoInput from '../TodoInput'

interface Props {
  title?: string
}
interface State {
  todoList: string[]
}

// 如果不向Component传递泛型，会拿不到值
export default class TodoList extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      todoList: ['吃饭'],
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (value: string){
    this.setState({
      todoList: [...this.state.todoList, value],
    })
  }
  render() {
    const { todoList } = this.state
    return (
      <div>
        <TodoInput handleSubmit={this.handleSubmit} />
        {todoList && todoList.length > 0 && todoList.map((item) => <div key={item}>{item}</div>)}
      </div>
    )
  }
}
