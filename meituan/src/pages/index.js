import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'
import Main from './index/Main/Main'
import store from './store'

ReactDOM.render(<Provider store={store}><Main/></Provider>, document.getElementById('app'))

