import { useState } from 'react';

interface IuseFormProps {
    name: string;
    values: string
}

export function useForm (inputValues: IuseFormProps) {
    const [values, setValues] = useState(inputValues);
  
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      const {value, name} = event.target;
      setValues({...values, [name]: value});
    };
    return {values, handleChange, setValues};
  }
