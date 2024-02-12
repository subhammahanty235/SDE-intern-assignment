import React from 'react';
import './Signup.scss';

const Signup = () => {
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
                        <p className="heading">Let's start a new <span>Journey</span></p>


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
                        <div>
                            <label htmlFor="name">name</label>

                            <input type="text" name='name' />
                        </div>
                    </div>
                    <div className="buttons__section">
                        <button>Sign Up</button>
                        <p>Already have an account?</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup
