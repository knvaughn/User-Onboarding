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

  return (
    <div className="App">
      <Form form={form} />
    </div>
  );
}

export default App;
