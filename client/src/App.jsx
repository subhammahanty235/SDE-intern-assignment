import { Route, Routes, useNavigate } from "react-router-dom"
import Signup from "./pages/auth/signup/Signup"
import Login from "./pages/auth/login/Login"
import HomePage from "./pages/homepage/HomePage"
import { useEffect } from "react"

function App() {
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('auth-token')){
      navigate('/signup')
    }
  },[])
  

  return (
    <>
    {/* <Signup/> */}
    <Routes>
      <Route exact path="/signup" element={<Signup/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route path="/" element={<HomePage/>} />
    </Routes>
    </>
  )
}

export default App
