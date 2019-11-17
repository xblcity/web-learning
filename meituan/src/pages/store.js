import {createStore} from 'redux'

import reducers from './index/reducers/main'

const store = createStore(reducers)

export default store