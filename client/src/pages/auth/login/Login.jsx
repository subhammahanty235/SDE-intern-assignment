import React, { useState } from 'react';
import './login.scss';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()
    const [userInfo , setUserInfo] = useState({ emailId:"" , password:""})

    const onChange = (e) =>{
        setUserInfo({...userInfo , [e.target.name]:e.target.value});
    }

    const loginFunction = async() =>{
        if(!userInfo.emailId || !userInfo.password){
            alert("Please fill all the required fields")
            return;
        }
       
        
        const response = await axios.post(`http://localhost:5000/api/auth/login` , 
        {
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
                        <p className="heading">Areh, Welcome <span>Mere Boss</span></p>


                    </div>
                    <div className="form__section">
                        

                        <div>
                            <label htmlFor="name">email</label>

                            <input type="text" name='emailId' value={userInfo.emailId} onChange={onChange} />
                        </div>
                        <div>
                            <label htmlFor="name">password</label>

                            <input type="text" name='password' value={userInfo.password} onChange={onChange} />
                        </div>
                    </div>
                    <div className="buttons__section">
                        <button onClick={loginFunction}>Login</button>
                        <p>Create a new account</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
