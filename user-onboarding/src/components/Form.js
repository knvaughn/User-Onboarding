import React from 'react';

function Form(props) {
    const { form, inputChange, submit } = props;

    const onChange = (event) => {
        const { name, value, type, checked } = event.target;
        const returnValue = type === "checkbox" ? checked : value;
        inputChange(name, returnValue);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    Name 
                    <input 
                        name="name"
                        type="text"
                        onChange={onChange}
                        value={form.name}
                    />
                </label>
                <label>
                    Email 
                    <input 
                        name="email"
                        type="email"
                        onChange={onChange}
                        value={form.email}
                    />
                </label>
                <label>
                    Password 
                    <input 
                        name="password"
                        type="password"
                        onChange={onChange}
                        value={form.password}
                    />
                </label>
                <label>
                    Terms of Service
                    <input 
                        name="termsOfService"
                        type="checkbox"
                        onChange={onChange}
                        checked={form.termsOfService}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;