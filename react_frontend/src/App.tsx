import React from "react";
import "./App.css";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "../utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import StudentUpcomingTest from "./pages/StudentUpcomingTest";
import StudentOngoingTest from "./pages/StudentOngoingTest";
import StudentPastAttempts from "./pages/StudentPastAttempts";
import StudentProfile from "./pages/StudentProfile";
import TeacherCreateTest from "./pages/TeacherCreateTest";
import TeacherCreateQuestion from "./pages/TeacherCreateQuestion";
import LoginPage from "./pages/Loginpage";
import SignUpPage from "./pages/signuppage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/login_page" element={<LoginPage />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          {/* <PrivateRoute> */}
          <Route
            path="/studentUpcomingTest"
            element={<StudentUpcomingTest />}
          />
          <Route path="/studentOngoingTest" element={<StudentOngoingTest />} />
          <Route
            path="/studentPastAttempts"
            element={<StudentPastAttempts />}
          />
          <Route path="/studentProfile" element={<StudentProfile />} />
          {/* </PrivateRoute> */}
          <Route
            path="/teacherCreateQuestion"
            element={<TeacherCreateQuestion />}
          />
          <Route path="/teacherCreateTest" element={<TeacherCreateTest />} />
          <Route path="/signup_page" element={<SignUpPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
