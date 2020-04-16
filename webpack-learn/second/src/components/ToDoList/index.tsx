import React, { Component } from 'react'

interface Props {
  title: string
  name?: string
}
interface State {
  todoList: string[]
}

// 如果不向Component传递泛型，会拿不到值
export default class ToDoList extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      todoList: ['吃饭'],
    }
  }
  handleSubmit = (value: string) => {
    this.setState({
      todoList: [...this.state.todoList, value],
    })
  }
  render() {
    const { todoList } = this.state
    const { title } = this.props
    return (
      <div>
        <div>{title}</div>
        {todoList && todoList.length > 0 && todoList.map((item) => <div key={item}>{item}</div>)}
      </div>
    )
  }
}
