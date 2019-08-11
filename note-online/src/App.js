import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import PriceList from './components/PriceList'
import ViewTab from './components/ViewTab'
import TotalPrice from './components/TotalPrice'
import MonthPicker from './components/MonthPicker'
import {LIST_VIEW} from './utility'

const items = [
  {
    id: '1',
    title: '去云南旅游',
    price: 200,
    date: '2018-8-1',
    category: {
      id: 1,
      name: '旅行',
      type: 'outcome',
      iconName: 'ios-plane'
    }
  },
  {
    id: '2',
    title: '去云南旅游',
    price: 500,
    date: '2018-8-1',
    category: {
      id: 1,
      name: '旅行',
      type: 'outcome',
      iconName: 'ios-plane'
    }
  }
]
class App extends Component {
  render() {
    return (
      <div className="App">
        <ViewTab 
          activeTab={LIST_VIEW}
          onTabChange={(view) => {alert(view)}}/>
        <TotalPrice 
          income={1000}
          outcome={1000}/>
        {/* <PriceList 
        items={items}
        onModifyItem={(item) => {alert(item.id)}}
        onDeleteItem={(item) => {alert(item.id)}} /> */}
        <MonthPicker year={2018} month={9}/>
      </div>
    );
  }
}

export default App;
