import React from 'react'

interface Props {
  handleSubmit: (value: string) => void
}
interface State {
  itemText: string
}
class FooterContent extends React.Component<Props, State> {
  private inputRef = React.createRef<HTMLInputElement>()
  constructor(props: Props) {
    super(props)
    this.state = {
      itemText: '',
    }
  }
  private updateValue(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ itemText: e.target.value })
  }
  private handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!this.state.itemText.trim()) {
      return
    }
    this.props.handleSubmit(this.state.itemText)
    this.setState({ itemText: '' })
  }
  public render() {
    const { itemText } = this.state
    const { updateValue, handleSubmit } = this
    return (
      <div>
        <input ref={this.inputRef} className="edit" value={this.state.itemText} />
      </div>
    )
  }
}

export default FooterContent
