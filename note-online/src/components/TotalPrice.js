import React from 'react'
import PropTypes from 'prop-types'

const TotalPrice = ({income, outcome}) => (
  <div className='row justify-content-between align-items-center'>
    <div className='col-2'>收入：{income}</div>
    <div className='col-2'>支出：{outcome}</div>
  </div>
)

TotalPrice.propTypes = {
  income: PropTypes.number.isRequired,
  outcome: PropTypes.number.isRequired
}

export default TotalPrice