import React from 'react'
import styles from './app.less'
import avatar from './assets/avatar.png'
import Count from './count.jsx'

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>这是一个React应用</div>
      <img className={styles.pic} src={avatar} alt=""/>
      <Count/>
    </div>
  )
}

export default App