import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from '../context/AuthContext';

const LoginPage: React.FC = () => {
    const { loginUser } = useContext(AuthContext);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;

        if (email.length > 0) {
            loginUser(email, password);
        }

        console.log(email);
        console.log(password);
    };

    return (
        <div className="loginpage_div">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Email</legend>
                    <input type="email" name="email" placeholder="Enter your email..." />
                </fieldset>
                <fieldset>
                    <legend>Password</legend>
                    <input type="password" name="password" placeholder="Enter your password..." />
                </fieldset>
                <button type="submit">Login</button>
            </form>
            <p>If you don't have an account, <Link to="/signup_page">sign up</Link>.</p>
        </div>
    );
};

export default LoginPage;
