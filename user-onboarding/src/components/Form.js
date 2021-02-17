import React from 'react';

function Form() {
    return (
        <div>
            <form>
                <label>
                    Name 
                    <input 
                        name="name"
                        type="text"
                    />
                </label>
                <label>
                    Email 
                    <input 
                        name="email"
                        type="email"
                    />
                </label>
                <label>
                    Password 
                    <input 
                        name="password"
                        type="password"
                    />
                </label>
                <label>
                    Terms of Service
                    <input 
                        name="termsOfService"
                        type="checkbox"
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;