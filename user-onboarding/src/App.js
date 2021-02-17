import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import axios from 'axios';

const initialForm = {
  name: '',
  email: '',
  password: '',
  termsOfService: false
}

function App() {
  const [form, setForm] = useState(initialForm);

  const addNewUser = (newUser) => {
    axios.post('https://reqres.in/api/users', newUser)
    .then((response) => {
      console.log(response);
      setForm(initialForm);
    })
    .catch((error) => console.log(error));
  }

  const inputChange = (name, value) => {
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

  return (
    <div className="App">
      <Form form={form} inputChange={inputChange} submit={submit} />
    </div>
  );
}

export default App;
