import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const SignUpPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const { registerUser } = useContext(AuthContext);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        registerUser(email, username, password, password2);
    };

    return (
        <div className="signuppage_div">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Username</legend>
                    <input
                        type="text"
                        placeholder="Enter a username..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <legend>Email</legend>
                    <input
                        type="email"
                        placeholder="Enter an email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <legend>Password</legend>
                    <input
                        type="password"
                        placeholder="Enter password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <legend>Confirm Password</legend>
                    <input
                        type="password"
                        placeholder="Re-enter Password..."
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                    />
                </fieldset>
                <button type="submit">Sign Up Now</button>
            </form>
            <p>If you already have an account, <Link to="/login_page">login here</Link>.</p>
        </div>
    );
};

export default SignUpPage;
