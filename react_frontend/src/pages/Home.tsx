import React from 'react';
import Button from '../components/Button';
import { Link as ReactLink } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-200">
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
        <div className="flex justify-between mb-4">
          <div className="w-1/2 mr-4">
            <div className="mb-2 text-center">
              <p>Teacher</p>
            </div>
            <div className="flex flex-col">
              <Button text="Login as Teacher" />
            </div>
          </div>
          <div className="w-1/2 ml-4">
            <div className="mb-2 text-center">
              <p>Student</p>
            </div>
            <div className="flex flex-col">
              <ReactLink to="/login_page">
                <Button text="Login as Student" />
              </ReactLink>
              <ReactLink to="/signup_page">
                <Button text="SignUp as Student" />
              </ReactLink>


              {/* <ReactLink to="/student-login" component={Button} text="Login as Student" />
              <ReactLink to="/student-signup" component={Button} text="Signup as Student" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;