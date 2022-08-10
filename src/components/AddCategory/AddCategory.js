import React, { useState } from "react";
import PropTypes from 'prop-types'
// Styles
import "./addCategory.style.css";

// Helper Functions
import { isValid } from "../../helper/formFunctions";

const AddCategory = ({ setCategories }) => {
    // Hooks
    const [inputValue, setInputValue] = useState("");

    // Events Handlers
    const inputHandler = (e) => {
        const { target } = e;
        return setInputValue(target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const valid = isValid(inputValue);

        // If the input value is valid
        if (valid) {
            //    We start looking for the new gif category
            // API Call
        } else {
            console.log("Invalid Value");
        }
    };

    return (
        <>
            <h1>Start Looking...</h1>
            <form onSubmit={submitHandler}>
                <input onChange={inputHandler} value={inputValue}></input>
                <button type="submit"> Go !!!!!</button>
            </form>
            <hr></hr>
        </>
    );
};


// PropType
AddCategory.propType = {
    setCategories: PropTypes.func.isRequired
}
export { AddCategory };
