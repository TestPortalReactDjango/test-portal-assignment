import React from 'react';
import { Link } from 'react-router-dom';

const Login:React.FC=()=>{
    return(
        <div className='Container'>
            <div className='Box'>
                <h2>Teacher</h2>
                <button>Login as Teacher</button>
            </div>
            <div className='Box'>
                <h2>Student</h2>
                <button><Link to="/login_page">Login as Student</Link></button>
                <button><Link to="/signup">SignUp as Student</Link></button>
            </div>
        </div>
    )
}

export default Login;