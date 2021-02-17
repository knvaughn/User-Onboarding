import React from 'react';

function Form(props) {
    const { form, inputChange } = props;

    const onChange = (event) => {
        const { name, value, type, checked } = event.target;
        const returnValue = type === "checkbox" ? checked : value;
        inputChange(name, returnValue);
    }

    return (
        <div>
            <form>
                <label>
                    Name 
                    <input 
                        name="name"
                        type="text"
                        onChange={onChange}
                    />
                </label>
                <label>
                    Email 
                    <input 
                        name="email"
                        type="email"
                        onChange={onChange}
                    />
                </label>
                <label>
                    Password 
                    <input 
                        name="password"
                        type="password"
                        onChange={onChange}
                    />
                </label>
                <label>
                    Terms of Service
                    <input 
                        name="termsOfService"
                        type="checkbox"
                        onChange={onChange}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;