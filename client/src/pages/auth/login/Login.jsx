import React from 'react';
import './login.scss';

const Login = () => {
    
    return (
        <section className="sign__up__screen">
            <div className="inner__sign__up__screen">
                <div className="left__section">
                    <p>
                        Blink 
                        <span>
                            Media
                        </span>
                    </p>

                </div>
                <div className="right__section">
                    <div className="heading__section">
                        <p className="heading">Areh, Welcome <span>Mere Boss</span></p>


                    </div>
                    <div className="form__section">
                        

                        <div>
                            <label htmlFor="name">name</label>

                            <input type="text" name='name' />
                        </div>
                        <div>
                            <label htmlFor="name">name</label>

                            <input type="text" name='name' />
                        </div>
                    </div>
                    <div className="buttons__section">
                        <button>Login</button>
                        <p>Create a new account</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
