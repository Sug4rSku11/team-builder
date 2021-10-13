import React, { useState } from 'react'
import './App.css';
import Form from './Form';
import Members from './Members';

const initialFormValues = {
  name: "",
  email: "",
  role: "",
}

function App() {
  const [members, setMembers] = useState([]);
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
      setErrorText("You must complete all fields!");
      return;
    }
  }
  return (
    <div className="app-container">
      {/* <h2>Team Form</h2> */}
      <Form
      values={formValues}
      update={updateForm}
      submit={submitForm}
      errorText={errorText}
      />
      {members.map(member => {
        return (
          <Members key={member.id} details={member}/>
        )
      })}
    </div>
  );
}

export default App;
