import React from 'react'
import styles from './app.less'
import avatar from './assets/avatar.png'
// import NumberContainer from './components/NumberContainer'
import TodoList from './components/TodoList'
// import Box from './components/Box'

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>这是一个React应用233</div>
      <img className={styles.pic} src={avatar} alt=""/>
      <TodoList />
      {/* <NumberContainer /> */}
      {/* <Box/> */}
    </div>
  )
}

export default App