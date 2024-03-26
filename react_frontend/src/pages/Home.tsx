import React from 'react';
import Button from '../components/Button';

const Home: React.FC=()=>{
    return(
        <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <div className="w-1/2 mr-4">
              <div className="mb-2">
                <p>Text 1</p>
              </div>
              <div className="flex flex-col">
                <Button text="Login as Teacher"/>
                </div>
            </div>
            <div className="w-1/2 ml-4">
              <div className="mb-2">
                <p>Text 2</p>
              </div>
              <div className="flex flex-col">
                <Button text="Login as Student"/>
                <Button text="Signup as Student"/>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Home;