import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/authContext';
import toast from 'react-hot-toast';
import Spinner from '../Spinner';

const AdminRoute = () => {
    const [ok ,setOk]=useState(false);
    const [auth ,setAuth]=useAuth();

  
   useEffect(()=>{
    const authCheck=async()=>{
const res=await axios.get("http://localhost:8080/api/v1/auth/admin-auth",{
    headers:{
        Authorization:auth?.token,
        // uper wali line ka matlab hai ki agar auth true hai yani milta hai to usme se token nikal lo
    },
})
if(res.data.ok){
    setOk(true);
}else{
    setOk(false);

}
    };
    if(auth?.token){ 
        authCheck()
    };

   },[auth?.token]);
// auth check : is function se ham get karrahe hai user ko jiska header me authorize code ye hai uske bad agar user exist karta hai to backend se status ok aaiga res me 

   return ok ? <Outlet /> :  <Spinner />
  
}

export default AdminRoute