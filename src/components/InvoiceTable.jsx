import axios from "axios";

import AddButton from './AddButton.jsx'
import TableHeader from './TableHeader.jsx'
import TableRow from './TableRow.jsx'

import { useState, useEffect } from "react";

const InvoiceTable = () => {
    
    const [currentData, setCurrentData] = useState([])

    useEffect(() => {
        axios.get('/invoices')
            .then((res) => {
                setCurrentData(res.data)
            })
            .catch((theseHands) => {
                console.log(theseHands)
            })
    }, [])

    const addRow = () => {

        axios.post(`/invoice`, {name: `New name`})
            .then((res) => {
                setCurrentData(res.data)
            })
            .catch((theseHands) => {
                console.log(theseHands)
            })
    }

    const deleteRow = (id) => {

        axios.delete(`/invoice/${id}`)
            .then((res) => {
                setCurrentData(res.data)
            })
            .catch((theseHands) => {
                console.log(theseHands)
            })
    }

    const row = currentData.map((el) => <TableRow
    initialInvoice={el}
    intialEditMode={false}
    key={el.id}
    deleteRow={() => deleteRow(el.id)}
    currentData={currentData}
    setCurrentData={setCurrentData}
    />)

    return (
    <div>
        <table>
            <thead>
                <TableHeader />
            </thead>
            <tbody>
                {row}
            </tbody>
            <tfoot>
                <AddButton addRow={addRow} />
            </tfoot>
        </table>
    </div>
    )
}

export default InvoiceTable