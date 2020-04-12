import React from 'react'
import styles from './app.less'
import avatar from './assets/avatar.png'

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>这是一个React应用</div>
      <img className={styles.pic} src={avatar} alt=""/>
    </div>
  )
}

export default App