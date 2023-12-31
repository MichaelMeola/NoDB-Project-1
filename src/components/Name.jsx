import React from "react";

const Name = (props) => {
    const {isEditing, value, setName} = props

    return isEditing ? (
        <td>
            <input
            type="text"
            value={value}
            onChange={(e) => setName(e.target.value)}
            />
        </td>
    ) : (
        <td>
            {value}
        </td>
    )
}

export default Name