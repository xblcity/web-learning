import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import PriceList from '../components/PriceList'
import ViewTab from '../components/ViewTab'
import TotalPrice from '../components/TotalPrice'
import MonthPicker from '../components/MonthPicker'
import CreateNew from '../components/CreateNew'
import {LIST_VIEW, CHART_VIEW, OUT_COME, IN_COME, padLeft} from '../utility'

const items = [
  {
    id: '1',
    title: '去云南旅游',
    price: 200,
    date: '2018-10-1',
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
    date: '2018-09-1',
    category: {
      id: 1,
      name: '旅行',
      type: 'outcome',
      iconName: 'ios-plane'
    }
  }
]

const newItem = {
  id: '3',
  title: '去云南旅游',
  price: 500,
  date: '2018-8-1',
  category: {
    id: 1,
    name: '旅行',
    type: 'income',
    iconName: 'ios-plane'
  }
}

export default class Home extends Component {
  state = {
    items,
    currentData: {
      year: 2018,
      month: 10
    },
    tabView: LIST_VIEW
  }
  onChangeSelect = (year, month) => {
    console.log(year)
    this.setState({
      currentData: {
        year,
       month,
      }
    })
  }
  onTabChange = (tabView) => {
    this.setState({
      tabView
    })
  }
  onCreateNewItem = () => {
    this.setState({
      items: [newItem, ...this.state.items]
    })
  }
  onModifyItem = (current) => {
    const modefiedItems = this.state.items.map(item => {
      if (item.id === current.id) {
        return {...item, title: '这是修改过的标题'}
      } else {
        return item
      }
    })
    this.setState({
      items: modefiedItems
    })
  }
  onDeleteItem = (current) => {
    const filterItems = this.state.items.filter(item => item.id !== current.id)
    this.setState({
      items: filterItems
    })
  } 
  render() {
    const {currentData, tabView, items} = this.state
    const showDate = items.filter(item => item.date.includes(`${currentData.year}-${padLeft(currentData.month)}`))
    let income = 0, outcome = 0
    items.forEach(item => {
      if(item.category.type === IN_COME) {
        income += item.price
      } else {
        outcome += item.price
      }
    })
    return (
      <>
        <header>
          <div className='row'>
            <div className='col'>
              <MonthPicker year={currentData.year} 
                month={currentData.month} 
                onChangeSelect={(year, month) => {this.onChangeSelect(year, month)}}/>
            </div>
            <div className='col'>
              <TotalPrice 
                income={income}
                outcome={outcome}/>
            </div>
          </div>
        </header>
        <div className='content-area py-3 px-3'>
          <ViewTab 
            activeTab={tabView}
            onTabChange={this.onTabChange}/>
          <CreateNew onCreateNewItem={this.onCreateNewItem}/>
          {
            tabView === LIST_VIEW && 
            <PriceList 
            items={showDate}
            onModifyItem={this.onModifyItem}
            onDeleteItem={this.onDeleteItem} />
          }
          {
            tabView === CHART_VIEW && 
            <div>这是图标区与</div> 
          }
        </div>
        
        
        
        
      </>
    );
  }
}

