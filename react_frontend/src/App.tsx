import React from "react";
import "./App.css";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {PrivateRoute} from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
// import Login from "./pages/Login";
import Home from "./pages/Home";
// import Signup from "./pages/Signup";
import StudentUpcomingTest from "./pages/StudentUpcomingTest";
import StudentPastTest from "./pages/StudentPastTest";
import StudentProfile from "./pages/StudentProfile";
import Teacher from "./pages/Teacher";
import LoginPage from "./pages/Loginpage";
import SignUpPage from "./pages/signuppage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/login_page" element={<LoginPage/>}/>
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/studentUpcomingTest" element={<StudentUpcomingTest />} />
        <Route path="/studentPastTest" element={<StudentPastTest />} />
        <Route path="/studentProfile" element={<StudentProfile />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/signup_page" element={<SignUpPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
