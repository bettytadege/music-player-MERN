import { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function SignUp() {
  const navigate=useNavigate()
    const[form,setForm]=useState({})
   
    
  const handleSubmit = async() => {
    try {
       
        const response=await axios.post('http://localhost:4000/api/users/register',form)
        alert(response.data.message)
        if(response.status === 201){
            navigate('/')
        
        }else{
    console.log('first')
        }
        return response.data.newUser;
          
    } catch (error) {
        console.log('error💥💥',error)
        // alert(Response.data.message)
        // console.log('error💥💥',error.message)
    }
  };
  
  return (
    <div className="flex justify-center w-full h-screen items-center">
    <div className="flex flex-col gap-8 w-[30%] h-[70%] bg-[rgba(255,255,255,0.13)] z-[1000] backdrop-blur-[10px]">
      <h1 className="text-white text-3xl text-center pt-2">SignUp</h1>
      <div className="flex flex-col gap-5 mx-10">
        {/* <form action=""> */}
        <Input text={"text"} placeholder={"First Name"} 
        onChange={(e)=>{setForm({
            ...form,
            firstName:e.target.value
        })}} />
        <Input text={"text"} placeholder={"Last Name"}   onChange={(e)=>{setForm({
            ...form,
            lastName:e.target.value
        })}} />
        <Input text={"email"} placeholder={"Email"}  onChange={(e)=>{setForm({
            ...form,
            email:e.target.value
        })}}  />
        <Input text={"password"} placeholder={"Password"}  onChange={(e)=>{setForm({
            ...form,
            password:e.target.value
        })}}  />
        <select name="role" id="" required className="bg-[rgba(255,255,255,0.07)] py-2 rounded-md text-white outline-none" >
            <option value="" className="text-gray-500"  hidden>role</option>
            <option value="admin" className="text-black">admin</option>
            <option value="user" className="text-black">user</option>
        </select>
        {/* </form> */}
      </div>
      <div className="mx-10">
        <Button
          className={`bg-white w-full text-black text-center py-2 rounded-md font-serif  hover:bg-black hover:text-white`}
          onClick={handleSubmit}
        >
          submit
        </Button>

        <div className="text-white text-sm pl-6 pt-3">
          <p>
            Already have an account?<Link to='/login'>Login</Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SignUp;
