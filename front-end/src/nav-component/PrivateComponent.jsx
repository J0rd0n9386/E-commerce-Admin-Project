import React from 'react'
import '../App.css' // Dhyan rakhein ki CSS file import ho (agar pehle se nahi hai)
import { Navigate, Outlet } from 'react-router-dom'

const PrivateComponent = () => {
   const auth = localStorage.getItem("user"); // ye user ke data ko localStorage se get karta hai
   // jise aapne SignUp component mein set kiya tha. Agar user authenticated hai, toh auth variable mein user ka data hoga, warna null ya undefined hoga.
    return auth ? <Outlet/> : <Navigate to="/SignUp"/> 
    // Agar user authenticated hai (auth true hai), toh Outlet component render hoga, jo ki nested routes ko render karega. 
    // Agar user authenticated nahi hai (auth false hai), toh Navigate component use karke user ko "/SignUp" route par redirect kar diya jayega.
    return(<Outlet/>)}
   
    export default PrivateComponent
    
//     PrivateComponent
// │
// ├── auth check karta hai
// │
// ├── ✅ Auth hai → <Outlet/> → nested route ka component dikhata hai
// │                              (Products, Profile, etc.)
// │
// └── ❌ Auth nahi → /SignUp pe redirect