import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            let result = await axios.post(`${import.meta.env.VITE_API_URL}/login`, 
                { email, password },
                { headers: { 'Content-Type': 'application/json' } }
            );
            
            const user = result.data; 
            if (user.auth) {
                localStorage.setItem("user", JSON.stringify(user));
                localStorage.setItem("token", JSON.stringify(user.auth));
                navigate("/");
            } else {
                alert("Login failed. Please check your credentials and try again.");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Error occurred while logging in");
        }
    }

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleLogin}>
                <div className="form-header">
                    <h1>Welcome Back</h1>
                    <p>Enter your details to proceed</p>
                </div>

                <div className="input-group">
                    <label>Email Address</label>
                    <input required onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter Your Email" />
                </div>

                <div className="input-group">
                    <label>Password</label>
                    <input required onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="••••••••" />
                </div>

                <div className="form-options">
                    <label className="remember-me">
                        <input type="checkbox" />
                        <span>Remember device</span>
                    </label>
                    <span className="forgot-password">Forgot password?</span>
                </div>

                <button className="primary-btn" type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;
// import react from 'react'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import '../App.css'


//      const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate()


//     const handleLogin = async (e) => {
//         e.preventDefault()
//         console.log("login button clicked", "email", email, "lauda", password);
//         try {
//             let result = await axios.post('https://upgraded-trout-xxv79q4j5jjhv6qp-5000.app.github.dev/login', { email, password },
//                 {
//                     headers: {
//                         'Content-Type': 'application/json'
//                     }

//                 });
//               const user = result.data; // Ye line backend se aane wale response ko "user" variable mein store karne ke liye hai.
//              console.log(user);
//             if (user._id) {
//                 localStorage.setItem("user", JSON.stringify(result.data))
//                 navigate("/")
//             } else {
//                 alert("Login failed. Please check your credentials and try again.")
//             }
             


//         } catch (error) {
//             alert("Error occurred while logging in")
//         }
//     }
//     return (
//         <div style={{ textAlign: 'center', marginTop: '50px' }}> {/* Thoda center karne ke liye */}
//             <h1>Login Page</h1>
//             <form action="Login">
//                 <input className='Email' onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter Your Email' />
//                 <input className='password' onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter Your Password' />
//                 <div className="form-options">
//                     <label className="remember-me">
//                         <input type="checkbox" />
//                         <span>Remember device</span>
//                     </label>
//                 </div>
//                 <button onClick={handleLogin}>Login</button>
//             </form>
//         </div>
//     )
// }
// export default Login