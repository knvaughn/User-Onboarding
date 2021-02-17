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
  const [form, setForm] = useState();

  useEffect(() => {
    setForm(initialForm);
  }, []);

  const inputChange = (name, value) => {
    setForm({...form, [name]: value});
  }

  return (
    <div className="App">
      <Form form={form} inputChange={inputChange} />
    </div>
  );
}

export default App;
