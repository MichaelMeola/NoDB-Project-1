import React from 'react'
import formatCurrency from '../utils/formatCurrency.js'

const Price = (props) => {
  const {isEditing, value, setPrice} = props

  return isEditing ? (
    <td>
      $<input
      type="text"
      value={value}
      onChange={(e) => setPrice(e.target.value)}
      />
    </td>
  ) : (
    <td>
      {formatCurrency(value)}
    </td>
  )
  
}

export default Price