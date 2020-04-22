import React from 'react'
import {Input, Button} from 'antd'
import {Rate} from 'antd'

interface Props {
  handleSubmit: (value: string) => void
}
interface State {
  itemText: string
}
class TodoInput extends React.Component<Props, State> {
  // private inputRef = React.createRef<HTMLInputElement>()
  constructor(props: Props) {
    super(props)
    this.state = {
      itemText: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateValue = this.updateValue.bind(this)
  }
  private updateValue(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ itemText: e.target.value })
  }
  private handleSubmit() {
    if (!this.state.itemText.trim()) {
      return
    }
    this.props.handleSubmit(this.state.itemText)
    this.setState({ itemText: '' })
  }
  public render() {
    const { itemText } = this.state
    const { handleSubmit, updateValue } = this
    return (
      <div>
        <Input onChange={updateValue} value={itemText} />
        <Button onClick={handleSubmit}>确定</Button>
        <Rate/>
      </div>
    )
  }
}

export default TodoInput
