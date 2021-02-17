import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';

const initialForm = {
  name: '',
  email: '',
  password: '',
  termsOfService: false
}

function App() {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    
  }, []);

  const inputChange = (name, value) => {
    setForm({...form, [name]: value});
  }

  const submit = () => {

  }

  return (
    <div className="App">
      <Form form={form} inputChange={inputChange} submit={submit} />
    </div>
  );
}

export default App;
