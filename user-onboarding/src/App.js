import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import FormSchema from './validation/FormSchema';
import * as Yup from 'yup';
import axios from 'axios';

const initialForm = {
  name: '',
  email: '',
  password: '',
  termsOfService: false
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  termsOfService: ''
}

const initialDisabled = true;

function App() {
  const [form, setForm] = useState(initialForm);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [users, setUsers] = useState([]);

  const addNewUser = (newUser) => {
    axios.post('https://reqres.in/api/users', newUser)
    .then((response) => {
      setUsers([...users, response.data]);
      setForm(initialForm);
    })
    .catch((error) => console.log(error));
  }

  const inputChange = (name, value) => {
    Yup.reach(FormSchema, name)
    .validate(value)
      .then(() => {setFormErrors({...formErrors, [name]: ''})})
      .catch((error) => {setFormErrors({...formErrors, [name]: error.errors[0]})})
    setForm({...form, [name]: value});
  }

  const submit = () => {
    const newUser = {
      name: form.name.trim(),
      email: form.email.trim(),
      password: form.password.trim(),
      termsOfService: !!form.termsOfService
    }
    addNewUser(newUser);
  }

  useEffect(() => {
    FormSchema.isValid(form)
    .then(isValid => setDisabled(!isValid))
  }, [form])

  return (
    <div className="App">
      <Form form={form} formErrors={formErrors} inputChange={inputChange} submit={submit} disabled={disabled} />
    </div>
  );
}

export default App;
