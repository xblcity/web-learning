import React, {Component} from 'react'

const countDown = (ms, cb) => {
  // ms millisecond  cb callback
  const timer = setInterval(() => {
    ms--
    if (ms < 1) {
      clearInterval(timer) // 当倒计时为0时，清理定时器
      cb(true, ms) // 执行回调函数
      return
    }
    cb(false, ms)
  }, 1000)
  return timer // 返回timerID
}

class Count extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: null, // 定时器id
      smsTime: 10, // 倒计时
      sendStatus: false // 是否已发送
    }
    this.sendCode = this.sendCode.bind(this)
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  sendCode() {
    this.setState({
      sendStatus: true,
      smsTime: 9
    })

    const timer = countDown(9, (isEnd, ms) => {
      if (isEnd) {
        this.setState({
          smsTime: 10,
          sendStatus: false,
        })
        return;
      }
      this.setState({
        smsTime: ms
      })
    });

    this.setState({
      timer
    })
  }

  render() {
    const {sendStatus, smsTime} = this.state
    return (
      <div>
        <div onClick={this.sendCode}>{sendStatus? '已发送': '点击发送'}</div>
        <div>{smsTime}</div>
      </div>
    )
  }
}

export default Count