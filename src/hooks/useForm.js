import { useState } from "react";

export const useForm = (initialState = {}) => {
    const [formState, setformState] = useState(initialState);

    // Handlers
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // console.log(name, value);
        return setformState({
            ...formState,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    }

    return [formState, handleInputChange, handleSubmit];
};
