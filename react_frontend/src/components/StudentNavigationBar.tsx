import React from "react";
import { ReactComponent as LogoutIcon } from "../assets/icons/sign-out-alt-solid.svg";
import { Link } from "react-router-dom";
const NavigationBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 ">
      <div className="flex justify-between items-center h-16">
        <div className="hidden sm:ml-6 sm:flex sm:space-x-8 ">
          <Link
            to="/studentUpcomingTest"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Upcoming tests
          </Link>
          <Link
            to="/studentPastTest"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Past tests
          </Link>
          <Link
            to="/studentProfile"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Profile
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
