import React from "react";
import { Link } from "react-router-dom";

const LoginPage:React.FC = ()=>{
    return (
        <div className="loginpage_div">
            <form method="POST" action="">
                <fieldset>
                    <legend>Email</legend>
                    <input type="email" placeholder="Enter your email..."/>
                </fieldset>
                <fieldset>
                    <legend>Password</legend>
                    <input type="password" placeholder="Enter your password..." />
                </fieldset>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
 export default LoginPage