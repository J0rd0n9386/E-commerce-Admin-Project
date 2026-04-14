import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../App.css';

const SignUp = () => {
    const navigate = useNavigate();
    const [name, SetName] = useState("");
    const [password, SetPassword] = useState("");
    const [email, SetEmail] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            let result = await axios.post(`${import.meta.env.VITE_API_URL}/register`,
                { name, email, password },
                { headers: { 'Content-Type': 'application/json' } }
            );

            const data = result.data; 
            if (data.auth) {
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("token", JSON.stringify(data.auth));
                navigate("/");
            } else {
                alert("Registration failed. Please try again.");
            }
        } catch (error) {
            console.log("API error", error.response?.data);
        }
    }

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSignUp}>
                <div className="form-header">
                    <h1>Create Account</h1>
                    <p>Join us to get started</p>
                </div>

                <div className="input-group">
                    <label>Full Name</label>
                    <input type="text" required onChange={(e) => SetName(e.target.value)} value={name} placeholder="John Doe" />
                </div>

                <div className="input-group">
                    <label>Email Address</label>
                    <input type="email" required onChange={(e) => SetEmail(e.target.value)} value={email} placeholder="john@example.com" />
                </div>

                <div className="input-group">
                    <label>Password</label>
                    <input type="password" required onChange={(e) => SetPassword(e.target.value)} value={password} placeholder="••••••••" />
                </div>

                <button className="primary-btn" type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;

// import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom"
// import axios from 'axios'


// const SignUp = () => {
//     const navigate = useNavigate();
//     const [name, SetName] = useState("");
//     const [password, SetPassword] = useState("");
//     const [email, SetEmail] = useState("");






//     const handleSignUp = async (e) => {
//         e.preventDefault();
//         console.log(name, email, password);
//         try {
//             // axios → backend ko request bhejne ke liye
//             let result = await axios.post("https://upgraded-trout-xxv79q4j5jjhv6qp-5000.app.github.dev/register",
//                 { name, email, password },
//                 {
//                     headers: {
//                         'Content-Type': 'application/json'
//                     }
//                 }

//             )
//             //             { name, email, password } → Tum bhej rahe ho backend ko
//             // result.data → Backend bhej raha hai tumhe wapas (registered user ka data / token / message)

//             const user = result.data; // Ye line backend se aane wale response ko "user" variable mein store karne ke liye hai.
//             console.log(user);
//             if (user._id) {
//                 localStorage.setItem("user", JSON.stringify(result.data))
//                 //user naam diya hai kyunki aapke backend se user ka data aa raha hai, jisme name, email, etc. hota hai.
//                 //  "JSON.stringify" ka use isliye kiya gaya hai kyunki localStorage sirf string format mein data store karta hai.
//                 // Ye line user ke data ko localStorage mein save karne ke liye hai. "result.data" mein wo data hota hai jo backend se aaya hai, jaise ki user ka name, email, etc. 
//                 // "JSON.stringify" ka use isliye kiya gaya hai kyunki localStorage sirf string format mein data store karta hai.
//                 console.log("localStorage:", localStorage.getItem("user"))
//                 navigate("/")
//             } else {
//                 alert("Registration failed. Please try again.")
//             }


//         } catch (error) {
//             console.log("API error", error.response?.data);

//         }
//     }

//     return (
//         <div className="signup-container">
//             <form className="form">
//                 <h1>Register</h1>

//                 <div className="input-group">
//                     <input type="text" required onChange={(e) => SetName(e.target.value)} value={name} />
//                     <label>Name</label>
//                 </div>

//                 <div className="input-group">
//                     <input type="email" required onChange={(e) => SetEmail(e.target.value)} value={email} />
//                     <label>Email</label>
//                 </div>

//                 <div className="input-group">
//                     <input type="password" required onChange={(e) => SetPassword(e.target.value)} value={password} />
//                     <label>Password</label>
//                 </div>

//                 <button className="btn" type="button" onClick={handleSignUp}>Sign Up</button>
//             </form>
//         </div>
//     )
// }

// export default SignUp

// // User form fill kare
// //        ↓
// // handleSignUp call ho
// //        ↓
// // name, email, password → Backend ko bheja
// //        ↓
// // Backend ne user save karke data wapas bheja
// //        ↓
// // result.data → localStorage mein save hua
// //        ↓
// // (navigate se doosre page par jaayega — abhi likha