import React from "react";
import Form from "react-bootstrap/Form";


function RadioButton({label, name, value, checked, onChange, ariaLabel, id}) {
    return (
        <Form.Check
            inline
            label={label}
            name={name}
            role="radio"
            aria-labelledby={ariaLabel}
            value={value}
            checked={checked}
            type={"radio"}
            onChange={onChange}
            id={id}
        />
    )
}

export default RadioButton;

