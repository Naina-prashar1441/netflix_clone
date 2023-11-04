import React from 'react'
import {signInWithPopup} from "firebase/auth"
import { Button } from '@mui/material'
import netflix from "../images/netflix.png"
import { auth, googleAuth } from "../firebase/setup"
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin() {

    const navigate = useNavigate()

    const googleSignin = async()=>{
        
        try{
            await signInWithPopup(auth, googleAuth)
            setTimeout(()=>{
              auth.currentUser?.emailVerified && navigate("/")
            }, 2000)
      toast.success("SignedIn successfully")
        }catch(err){
            console.error(err)
        }
    }

    console.log(auth?.currentUser)

  return (
    <div style={{backgroundColor:"#181818", height:"100vh", padding:"20px"}}>
    <ToastContainer autoClose={2000} />
    <img style={{width:"100px", height:"100px"}} src={netflix}/>
    <div style={{position:"fixed", left: "45%", top:"35%"}}>
    <Button onClick={googleSignin} variant='contained' color='error'>Signin with Google</Button>
    <br/>
    <div>
       <h2 style={{color:"white"}}>Let's start <br/>to explore movie <br/>from here</h2>
    </div>
    
    </div>
      
    </div>
  )
}

export default Signin
