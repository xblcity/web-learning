import React from 'react'
import PoopTypes from 'prop-types'
import {padLeft, numberRange} from '../utility'

class MonthPicker extends React.Component {
  state = {
    isOpen: false,
    selectedYear: this.props.year
  }

  onChangeOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  onSetYear = (event, currentYear) => {
    event.preventDefault()
    this.setState({
      selectedYear: currentYear
    })
  }

  onSetMonth = (event, currentMonth) => {
    event.preventDefault()
    this.setState({
      isOpen: false
    })
    this.props.onChangeSelect(this.state.selectedYear, currentMonth)
  }
  render() {
    const {year, month} = this.props
    const {selectedYear, isOpen} = this.state
    const yearRange = numberRange(9, 2014)
    const monthRange = numberRange(12, 0)
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
                    <a href='#' key={index} 
                    onClick={(e) => {this.onSetYear(e, yearNumber)}}
                    className={(yearNumber === selectedYear) ? 'dropdown-item active': 'dropdown-item'}>
                      {yearNumber}年
                    </a>
                  )
                }
              </div>
              <div className='col'>
                {
                  monthRange.map((monthNumber, index) => 
                    <a href='#' key={index} 
                      onClick={(e) => {this.onSetMonth(e, monthNumber)}}
                      className={(monthNumber === month) ? 'dropdown-item active': 'dropdown-item'}>
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