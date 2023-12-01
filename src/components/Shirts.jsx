import React from 'react'

const Shirts = (props) => {
  const {isEditing, value, setShirts} = props

  return isEditing ? (
    <td>
      <input
      type="text"
      value={value}
      onChange={(e) => setHours(e.target.value)}
      />
    </td>
  ) : (
    <td>
      {value}
    </td>
  )

}

export default Shirts