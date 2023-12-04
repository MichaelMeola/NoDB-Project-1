import Name from './Name.jsx'
import Shirts from './Shirts.jsx'
import ModeButtons from './ModeButtons.jsx'
import Price from './Price.jsx'

import formatCurrency from '../utils/formatCurrency.js'
import { useState } from 'react'
import axios from 'axios'

const TableRow = (props) => {


  const {initialInvoiceData, initialEditMode, deleteRow, currentData, setCurrentData} = props

  const [editMode, setIsEditing] = useState(initialEditMode)
  const [name, setName] = useState(initialInvoiceData.name)
  const [price, setPrice] = useState(initialInvoiceData.price)
  const [shirts, setShirts] = useState(initialInvoiceData.shirts)

console.log('initialInvoiceData:', initialInvoiceData);
console.log('initialInvoiceData.name:', initialInvoiceData.name);


  const changeEditMode = () => setIsEditing(true)
  const changeNormalMode = () => {

    const bodyObj = {
      name,
      price,
      shirts
    }

    axios.put(`/invoice/${initialInvoiceData.id}`, bodyObj)
      .then((res) => {
        console.log(res.data)
        setCurrentData(res.data)
        setIsEditing(false)
      })
      .catch((theseHands) => {
        console.log(theseHands)
      })
  }

  return (
    <tr>
      <ModeButtons 
      isEditing={editMode} 
      changeEditMode={changeEditMode}
      changeNormalMode={changeNormalMode}
      deleteRow={deleteRow}
      />

      <Name
       isEditing={editMode}
       value={name}
       setName={setName}
       />

      <Shirts
      isEditing={editMode}
      value={shirts}
      setShirts={setShirts}
      />
      
      <Price
      isEditing={editMode}
      value={price}
      setPrice={setPrice}
      />


      <td>{formatCurrency(shirts * price)}</td>
    </tr>
  )
}

export default TableRow