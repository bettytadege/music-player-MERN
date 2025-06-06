// import React from 'react'
type InputProps={
    text:string,
    // className:string,
    placeholder:string,
    onChange:(e: React.ChangeEvent<HTMLInputElement>)=>void
}
function Input({text,placeholder,onChange}:InputProps) {
  return (
  <input
  onChange={onChange} 
  type={text} 
  className=' rounded-md  py-2 w-[100%] bg-[rgba(255,255,255,0.07)] placeholder:text-gray-500 
  outline-none focus:outline-white  text-white pl-3' placeholder={placeholder}/>
  )
}

export default Input
