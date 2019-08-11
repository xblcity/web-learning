import React from 'react'
import PoopTypes from 'prop-types'
import {padLeft, numberRange} from '../utility'

class MonthPicker extends React.Component {
  state = {
    isOpen: false
  }

  onChangeOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    const {year, month} = this.props
    const yearRange = numberRange(9, 2014)
    console.log(yearRange)
    const monthRange = numberRange(12, 0)
    const {isOpen} = this.state
    return (
      <div style={{position: 'relative'}}>
        <h4>选择月份</h4>
        <button className='btn btn-lg btn-secondary dropdown-toggle' onClick={this.onChangeOpen}>
          {`${year}年${padLeft(month)}月`}
        </button>
        {
          isOpen && 
          <div className='dropdown-menu' style={{display: 'block'}}>
            <div className='row'>
              <div className='col border-right'>
                {
                  yearRange.map((yearNumber, index) => 
                    <a href='#' key={index} className={(yearNumber === year) ? 'dropdown-item active': 'dropdown-item'}>
                      {yearNumber}年
                    </a>
                  )
                }
              </div>
              <div className='col'>
                {
                  monthRange.map((monthNumber, index) => 
                    <a href='#' key={index} className={(monthNumber === month) ? 'dropdown-item active': 'dropdown-item'}>
                      {padLeft(monthNumber)}月
                    </a>
                  )
                }
              </div>
            </div>
          </div> 
        }
      </div>
    )
  }
}

MonthPicker.propTypes = {

}

export default MonthPicker