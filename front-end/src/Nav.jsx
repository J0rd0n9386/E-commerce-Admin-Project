import React from 'react';
import {useNavigate , NavLink } from 'react-router-dom';
import './App.css'

const Nav = () => {
    const auth = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear(); // isse localStorage ka saara data clear ho jayega, jisme user ka data bhi shamil hai.
        //  Iska matlab hai ki user logout ho jayega aur uska session khatam ho jayega.
        navigate("/Signup")

        console.warn("apple");

    }
    return ( 
        <nav className='nav'>
            <div className="nav-logo">
                <span className="logo-icon">✦</span> 
                <span className="logo-text">Nexus</span>
            </div>
            {auth?<>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/ProductList">Product-List</NavLink>
            <NavLink to="/Add-Product">Add-Product</NavLink>
            <NavLink to="/Update-Product">Update-Product</NavLink>
            <NavLink to="/Profile">Profile</NavLink>
            <NavLink onClick={logout} to="/Signup">Logout ({auth.name})</NavLink>
            </>
        
                :<>
                <NavLink to="/Login">Login</NavLink>
                <NavLink to="/SignUp">SignUp</NavLink>
                </>
              
            }
        </nav>
        //agr user authenticated hai toh logout dikhana hai, nahi toh signup dikhana hai
    );
}

export default Nav;