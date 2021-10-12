import React, { useState } from 'react'
import './App.css';
import Form from './Form';


const initialFormValues = {
  name: "",
  email: "",
  role: "",
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errorText, setErrorText] = useState("");
  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newInput = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    if (!newInput.name || !newInput.email || !newInput.role) {
      setErrorText("You must complete all fields.");
      return;
    }
  }
  return (
    <div className="App">
      <h2>Hello World</h2>
      <Form/>
    </div>
  );
}

export default App;
