import React from 'react'
import { useState } from 'react'
import {createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, register } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword,} from 'firebase/auth';


import Profil from "../assets/profil.webp"
import { Avatar, Box, Button } from '@mui/material';


const Register = () => {

  const navigate = useNavigate()
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPass, setRegisterPass] = useState("")
    const [registerName, setRegisterName] = useState("")
   

const register = async (e) =>{
    e.preventDefault();
      setRegisterEmail("")
      setRegisterPass("")
      
      try {
      if(registerName && registerPass && registerEmail){
       
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPass)
      console.log(user)
       //? kullanıcı profilini güncellemek için kullanılan firebase metodu
       await updateProfile(auth.currentUser, {
        displayName: `${registerName}`,
      });
      navigate("/");
      alert("kayıt yapılmıştır")
      navigate("/")
      }else{
        alert("Boş alan bırakmayınız")
      }
      }catch(error){
          console.log(error)
      }
     }

     return (
   
      
        <Box sx={{ width:"25%", margin:"auto", display:"flex", flexDirection:"column", gap:"2rem", alignItems:"center", backgroundColor:"orange", my:"3rem"}}>
        <Avatar src={Profil} sx={{width:"10rem", height:"10rem", mt:"2rem"}}/>
        <Box sx={{mx:"5",  display:"flex", flexDirection: "column", gap:"1rem"}} >
            <label className="form-label">User Name</label>
            <input  value={registerName} type="text" onChange={(e)=> {setRegisterName(e.target.value)} }/>
        </Box>
        <Box sx={{mx:"5",  display:"flex", flexDirection: "column", gap:"1rem"}}>
        <label className="form-label">Email address</label>
            <input value={registerEmail} type="text" onChange={(e)=> {setRegisterEmail(e.target.value)}}/>
        </Box>
        <Box sx={{mx:"5",  display:"flex", flexDirection: "column", gap:"1rem"}}>
        <label  className="form-label">Password</label>
              <input type="password" value={registerPass} onChange={(e) => {setRegisterPass(e.target.value)}} />
        </Box>
        <Button sx={{mb:"1rem"}}  onClick={register}>Register</Button>
        </Box>
        
      


      
)
}

export default Register