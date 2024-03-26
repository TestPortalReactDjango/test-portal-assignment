import React from "react";
import {ReactComponent as LogoutIcon} from "../assets/icons/sign-out-alt-solid.svg";
const NavigationBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 ">
      <div className="flex justify-between items-center h-16">
        <div className="hidden sm:ml-6 sm:flex sm:space-x-8 ">
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Upcoming tests
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Past tests
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Profile
          </a>
        </div>
        <div className="flex flex-col">
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Logout
            <LogoutIcon className="h-6" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
