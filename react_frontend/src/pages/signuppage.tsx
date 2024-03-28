import React from "react";
import { Link } from "react-router-dom";

const SignUpPage : React.FC= ()=>{
   return( 
   <div className="signuppage_div">
        <form action="" method="POST">
            <fieldset>
                <legend>Username</legend>
                <label htmlFor="username"><input name="username" type="text" placeholder="Enter a username..."/></label>
            </fieldset>
            <fieldset>
                <legend>Email</legend>
                <label htmlFor="email"><input name="email" type="email" placeholder="Enter an email..."/></label>
            </fieldset>
            <fieldset>
                <legend>Password</legend>
                <label htmlFor="password"><input name="password" type="password" placeholder="Enter password..." /></label>
            </fieldset>
            <fieldset>
                <legend>Confirm Password</legend>
                <label htmlFor="password2"><input name="password2" type="password" placeholder="Re-enter Password..." /></label>
            </fieldset>
            <button type="submit">Sign Up Now</button>
        </form>
    </div>
   )
}


export default SignUpPage