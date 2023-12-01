import React from "react";

function Name(props) {
    const {isEditing, value, setDescription} = props

    return isEditing ? (
        <td>
            <input
            type="text"
            value={value}
            onChange={(e) => setDescription(e.target.value)}
            />
        </td>
    ) : (
        <td>
            {value}
        </td>
    )
}

export default Name