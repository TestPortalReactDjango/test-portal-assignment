import React from "react";
import { ReactComponent as LogoutIcon } from "../assets/icons/sign-out-alt-solid.svg";
import { Link } from "react-router-dom";
const NavigationBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 ">
      <div className="flex justify-between items-center h-16">
        <div className="hidden sm:ml-6 sm:flex sm:space-x-8 ">
          <Link
            to="/teacherCreateTest"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Create Test
          </Link>
          <Link
            to="/teacherCreateQuestion"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Create Question
          </Link>
        </div>
        <div className="flex flex-col">
          <Link
            to="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Logout
            <LogoutIcon className="h-6" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
