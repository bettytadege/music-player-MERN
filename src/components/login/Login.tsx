import React, { useState } from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const navigate=useNavigate()
    const[form,setForm]=useState({}) 
    const handleSubmit = async() => {
        try {
           
            const response=await axios.post('http://localhost:4000/api/users/login',form)
            
            alert(response.data.message)
            if(response.status === 201){
                localStorage.setItem('token', JSON.stringify({token:response.data.token}))
                navigate('/home')  
             }
             else{
             console.error();
             
             }
            return response.data.newUser;
              
        } catch (error) {
            console.log('error💥💥',error)
            // console.log('error💥💥',error.message)
        }
      };
  return (
    <div className="flex justify-center w-full h-screen items-center">
    <div className="flex flex-col gap-8 w-[30%] h-[60%] bg-[rgba(255,255,255,0.13)] z-[1000] backdrop-blur-[10px]">
      <h1 className="text-white text-3xl text-center pt-2">Login</h1>
      <div className="flex flex-col gap-5 mx-10">
        <Input text={"email"} placeholder={"Email"}  onChange={(e)=>{setForm({
            ...form,
            email:e.target.value
        })}}  />
        <Input text={"password"} placeholder={"Password"}  onChange={(e)=>{setForm({
            ...form,
            password:e.target.value
        })}} />
      </div>
      <div className="mx-10">
        <Button
          className={`bg-white w-full text-black text-center py-2 rounded-md font-serif  hover:bg-black hover:text-white`}
          onClick={handleSubmit}
        >
          login
        </Button>

        <div className="text-white text-sm pl-6 pt-3">
          <p>
           Don't You have an account?<Link to='/'>signup</Link>
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Login
