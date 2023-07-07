import React from 'react';
import { useState,useEffect } from 'react';
import Google from "./images/google-icon.png";
import Apple from "./images/apple 1.png" 
import App from '../App';
import { useNavigate } from "react-router-dom";
function Signin() {
  const initvalues = {email:"",password:""}
  const[formValues,setFormValues] = useState(initvalues);
  const[formErrors,setFormErrors] = useState({});
  const[isSubmit,setIsSubmit] = useState(false);
    const navigate = useNavigate();
    const handlechange = (e)=>{
      const {name,value} = e.target;
      setFormValues({...formValues,[name]:value});
      // console.log(setFormValues)
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
    if(!values.email){
      window.alert("Email is required");
    }
    else if(!values.password){
      window.alert("password is required");
    }
    else if(values.email && values.password){
      navigate("/navbar");
    }
    }


    function onRegister(){
        navigate("/register");
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
  {/* <pre>{JSON.stringify(formValues,undefined,2)}</pre> */}
   Sign In 
  </h1>
  <p className='paragraphSign'>Sign in to your account</p>
  </div>

<div className='allButton'>
<button className='buttonclass'><img className='imgstyle' src={Google}/>Sign in with google</button>
<button className='buttonclass'><img className='imgstyle' src={Apple}/>Sign in with apple</button>

</div>
<div className='formDiv'>
<form onSubmit={handlesubmit} >
<label>
Email address
</label>
<input type="email" name='email' value={formValues.email} onChange={handlechange} />
<label>
Password
</label>
<input type="password" name='password' value={formValues.password} onChange={handlechange} />
<a><p className='forgotLink'>
Forgot password?
</p></a>
<button className='signinButton' type='submit'>Sign In</button>
</form>
</div>

<div className='registerDiv'>
Don’t have an account? <span onClick={onRegister} className='registerHere'>Register here</span>

</div>



  </div>
</div>
     
    </>
  )
}

export default Signin;