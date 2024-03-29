import React from 'react';
// import Button from '../components/Button';
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
              <button className="bg-blue-500 text-white rounded py-2 px-4 mb-2">Login as Teacher</button>            </div>
          </div>
          <div className="w-1/2 ml-4">
            <div className="mb-2 text-center">
              <p>Student</p>
            </div>
            <div className="flex flex-col">
              <ReactLink to="/login_page">
                <button className="bg-blue-500 text-white rounded py-2 px-4 mb-2">Login as Student</button>
              </ReactLink>
              <ReactLink to="/signup_page">
                <button className="bg-blue-500 text-white rounded py-2 px-4 mb-2">SignUp as Student</button>
              </ReactLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;