import { useState } from "react";

export function useForm(inputValues = {}) {
    const [values, setValues] = useState(inputValues);

    const handleChange = (event) => {
        const { value, name } = event.target;
        setValues({ ...values, [name]: value });
        console.log(values)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return { values, handleChange, handleSubmit, setValues };
}
