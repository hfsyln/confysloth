import React from 'react'
import { signInWithEmailAndPassword,} from 'firebase/auth';
import { auth, signInWithGoogle } from '../firebaseConfig';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Profil from "../assets/profil.webp"
import { Avatar, Box, Button } from '@mui/material';



const LoginPage = () => {

  const navigate = useNavigate();
    
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPass, setLoginPass] = useState("")

   const login= async () =>{
    try {
    const user = await signInWithEmailAndPassword(auth, loginEmail, loginPass)
    console.log(user)
    navigate("/")
    }catch(error){
        console.log(error)
        alert("Geçerli bir giriş yapınız yada kayıt olunuz")
    }
   }


const signInGoog = () => {
  signInWithGoogle()
  navigate("/")
}
 



  return (
   
      
          <Box sx={{ width:"25%", margin:"auto", display:"flex", flexDirection:"column", gap:"2rem", alignItems:"center", backgroundColor:"orange", my:"3rem"}}>
          <Avatar src={Profil} sx={{width:"10rem", height:"10rem", mt:"2rem"}}/>
          <Box sx={{mx:"5",  display:"flex", flexDirection: "column", gap:"1rem"}} >
              <label className="form-label">Email address:</label>
              <input  value={loginEmail} type="text" onChange={(e)=> {setLoginEmail(e.target.value)} }/>
          </Box>
          <Box sx={{mx:"5",  display:"flex", flexDirection: "column", gap:"1rem"}}>
              <label  className="form-label">Password:</label>
              <input value={loginPass} type="password" onChange={(e)=> {setLoginPass(e.target.value)}}/>
          </Box>
          <Box sx={{display:"flex"}}>
          <Button  onClick={login}>login</Button>
          <Button  onClick={signInGoog}>Sing In with Google</Button>
          </Box>
          <Button sx={{mb:"1rem"}}  onClick={()=>navigate("/register")}>Register</Button>
          </Box>
          
        


        
  )
}

export default LoginPage