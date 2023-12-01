import React from "react";

function AddButton(props){

    const {addRow} = props

    return (
        <tr>
            <td></td>
            <td>
                <button onClick={addRow}>Add Customer</button>
            </td>
        </tr>
    )
}

export default AddButton