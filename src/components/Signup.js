import { useState,useEffect } from 'react'
import React from 'react'
import Google from "./images/google-icon.png"
import Apple from "./images/apple 1.png"
import { useNavigate } from 'react-router-dom'

function Signup() {
  const initvalues = {name:"",email:"",password:""}
  const[formValues,setFormValues] = useState(initvalues);
  const[formErrors,setFormErrors] = useState({});
  const[isSubmit,setIsSubmit] = useState(false);
  
  const navigate = useNavigate();

    const handlechange = (e)=>{
      const {name,value} = e.target;
      setFormValues({...formValues,[name]:value});
    }
    const handlesubmit = (e)=>{
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
     };
     useEffect(()=>{
       if(Object.keys(formErrors).length===0 && isSubmit){
         console.log(formValues);
       }
     },[formErrors])

     const validate = (values) =>{
      const errors = {};
      if(!values.name){
        window.alert("Name is required");
      }
      if(!values.email){
        window.alert("Email is required");
      }
      else if(!values.password){
        window.alert("password is required");
      }
      else if(values.email && values.password && values.name){
        navigate("/navbar");
      }
      return errors
      }

  return (
    <>
    <div className="split left">
     <div className="centered">
       <h1 className='headingBoard'>Board.</h1>
     </div>
   </div>
   
   <div className="split right">
     <div className="centeredDiv">
   
     <div>
     <h1 className='headingSignin'>
      Sign Up 
     </h1>
     <p className='paragraphSign'>Sign up to register your account</p>
     </div>
   
   <div className='allButton'>
   <button className='buttonclass'><img className='imgstyle' src={Google}/>Sign up with google</button>
   <button className='buttonclass'><img className='imgstyle' src={Apple}/>Sign up with apple</button>
   
   </div>
   <div className='formDiv'>
   <form onSubmit={handlesubmit} >
   <label>
   Name
   </label>
   <input type="text" name='name' value={formValues.name} onChange={handlechange}/>
   <label>
   Email address
   </label>
   <input type="email" name='email' value={formValues.email} onChange={handlechange} />
   <label>
   Password
   </label>
   <input type="password" name='password' value={formValues.password} onChange={handlechange}/>
   <button className='signUpButton' type='submit'>Sign Up</button>
   </form>
   </div>
   </div>
     </div>
        
       </>
     )
}

export default Signup