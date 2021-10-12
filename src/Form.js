import React from 'react';

export default function Form(props){

const { values, update, submit, errorText } = props

const onChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;
    update(name, value);
}
const onSubmit = evt => {
    evt.preventDefault();
    submit();
}

    return (
        <form className="form-container" onSubmit={onSubmit}>
            <div className="form-inputs">
            <label>Name
                <input
                type="text"
                name="name"
                value={values.name}
                onChange={onChange}
                placeholder="Name"
                />    
            </label>
            <label>Email
                <input
                type="email"
                name="email"
                value={values.email}
                onChange={onChange}
                placeholder="Email"
                />    
            </label>
            <label>Role
                <input value name="role" placeholder="Name" onChange={onChange}/>   
                <option value="">Role</option>
                <option value="frontend engineer">Frontend Engineer</option> 
                <option value="backend engineer">Backend Engineer</option>
                <option value="fullstack developer">Fullstack Developer</option>
                <option value="designer">Designer</option>
            </label>
            <div className="submit">
                <button>Submit</button>
            </div>    
            </div>
        </form>
    )
}