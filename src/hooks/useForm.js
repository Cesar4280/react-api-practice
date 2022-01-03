import { useState } from "react";

export const useForm = (initialState = {}) => {

    const [inputs, setInputs] = useState(initialState);

    const handleChange = ({ target: { name, type, value, checked } }) => setInputs(
        currentState => ({ ...currentState, [name]: type === "checkbox" ? checked : value })
    );

    const reset = () => setInputs(initialState);

    return [inputs, handleChange, reset];
}
