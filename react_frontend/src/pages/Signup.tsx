import React from 'react';

function SignUp(){
    return(
        <div className='Container'>
            <div className='Box'>
                <h2>Teacher</h2>
                <button>Login as Teacher</button>
            </div>
            <div className='Box'>
                <h2>Student</h2>
                <button>Login as Student</button>
                <button>SignUp as Student</button>
            </div>
        </div>
    )
}

export default SignUp;