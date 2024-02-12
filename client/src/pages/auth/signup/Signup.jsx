import React, { useState } from 'react';
import './Signup.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const Signup = () => {
    const navigate = useNavigate()
    const [userInfo , setUserInfo] = useState({name:"" , emailId:"" , password:""})

    const onChange = (e) =>{
        setUserInfo({...userInfo , [e.target.name]:e.target.value});
    }

    const signUpFunction = async() =>{
        if(!userInfo.name || !userInfo.emailId || !userInfo.password){
            alert("Please fill all the required fields")
            return;
        }
        console.log("here")
        
        const response = await axios.post(`http://localhost:5000/api/auth/signup` , 
        {
            name:userInfo.name,
            emailId:userInfo.emailId,
            password:userInfo.password
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        })
        console.log(response.data)


        if(response.data.success === true){
            localStorage.setItem('auth-token' , response.data.token);
            navigate('/');
        }else{
            alert(response.data.message);
        }

    }

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

                            <input type="text" name='name' value={userInfo.name} onChange={onChange} />
                        </div>

                        <div>
                            <label htmlFor="emailId">email</label>

                            <input type="text" name='emailId' value={userInfo.emailId} onChange={onChange} />
                        </div>
                        <div>
                            <label htmlFor="password">password</label>

                            <input type="text" name='password' value={userInfo.password} onChange={onChange} />
                        </div>
                    </div>
                    <div className="buttons__section">
                        <button onClick={()=>{signUpFunction()}}>Sign Up</button>
                        <p onClick={()=>{navigate('/login')}}>Already have an account?</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup
