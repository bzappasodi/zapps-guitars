import React from 'react'
import "@testing-library/jest-dom";
import RadioButton from "../RadioButton/RadioButton";
import { render, screen } from "@testing-library/react";
import {userEvent} from "@testing-library/user-event";
import { jest } from '@jest/globals';
import { useState } from 'react';


// describe("RadioButton", () => {
//     it("it should check the radioButton choices", () => {
//         const props = {
//             label:"foo", name:"fooName", value:"fooValue",  checked:true, onChange: "fooonChange"
//         };
//         render(<RadioButton {...props} />);
//
//         const displayValue = screen.getByDisplayValue("fooValue");
//
//         expect(displayValue).toBeInTheDocument();
//     });
// })


// describe("RadioButton", () => {
//     it("should render the radio button with the correct value and checked state", () => {
//         const handleChange = jest.fn();
//         const props = {
//             label: "foo",
//             name: "fooName",
//             value: "fooValue",
//             checked: "true",
//             onChange: handleChange,
//         };
//
//         render(<RadioButton {...props} />);
//         const radioButton = screen.getByRole('radio', { name: /foo/i });
//
//         expect(radioButton).toBeInTheDocument();
//         expect(radioButton).toBeChecked();
//
//         // Optionally simulate user interaction and assert onChange is called
//         userEvent.click(radioButton);
//         expect(handleChange).toHaveBeenCalledTimes(1);
//     });
// });



describe("RadioButton", () => {
    const jest = require('jest-mock');
    it("should render the radio button with the correct value and checked state", () => {

        const handleChange = jest.fn();
        const props = {
            label: "Amps",
            name: "equipment-view",
            value: "amps",
            checked: false,
            ariaLabel: "Amps",
            onChange: handleChange,
            id: "Amps"
        };

        render(<RadioButton {...props} />);

        const radioButton = screen.getByLabelText(/Amps/i);  // This looks for the associated label text

        expect(radioButton).toBeInTheDocument();
        expect(radioButton).not.toBeChecked();

        // Optionally simulate user interaction and assert onChange is called
        userEvent.click(radioButton);
        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});



// Wrapping RadioButton with a stateful component for testing purposes


describe("RadioButton", () => {
    const RadioButtonWithState = (props) => {
        const [checked, setChecked] = useState(props.checked);

        const handleChange = () => {
            setChecked(!checked);
            props.onChange();  // Call the onChange prop when the radio button is clicked
        };

        return <RadioButton {...props} checked={checked} onChange={handleChange} />;
    };
    it.skip("should call onChange when the radio button is clicked", () => {
        const handleChange = jest.fn();
        const props = {
            label: "foo",
            name: "fooName",
            value: "fooValue",
            checked: false,  // Initially unchecked
            onChange: handleChange,
        };

        render(<RadioButtonWithState {...props} />);

        const radioButton = screen.getByRole('radio');


        console.log("radioButton chrissy ", radioButton)

        expect(radioButton).toBeInTheDocument();
        expect(radioButton).not.toBeChecked();

        userEvent.click(radioButton);  // Simulate user click
        expect(handleChange).toHaveBeenCalledTimes(1);  // Ensure onChange is called
        expect(radioButton).toBeChecked();  // Check that the radio button is now checked
    });
});

