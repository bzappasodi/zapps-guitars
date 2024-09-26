import React from "react";
import Form from "react-bootstrap/Form";


function RadioButton({label, name, value, checked, onChange}) {
    return (
        <Form.Check
            inline
            label={label}
            name={name}
            value={value}
            checked={checked}
            type={"radio"}
            onChange={onChange}
        />
    )
}

export default RadioButton;

