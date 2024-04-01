import React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
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
// import PrivateRoute from "./utils/PrivateRoute";
import TeacherRoute from "./utils/TeacherRoute";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login_page" element={<LoginPage />} />
          <Route path="/studentUpcomingTest"
            element={
              <PrivateRoute>
                <StudentUpcomingTest />
              </PrivateRoute>
            } />
          <Route path="/studentOngoingTest" element={<PrivateRoute><StudentOngoingTest /></PrivateRoute>} />
          <Route path="/studentPastAttempts" element={<PrivateRoute><StudentPastAttempts /></PrivateRoute>} />
          <Route path="/studentProfile" element={<PrivateRoute><StudentProfile /></PrivateRoute>} />
          <Route path="/teacherCreateQuestion" element={<TeacherRoute><TeacherCreateQuestion /></TeacherRoute>} />
          <Route path="/teacherCreateTest" element={<TeacherRoute><TeacherCreateTest /></TeacherRoute>} />
          <Route path="/signup_page" element={<SignUpPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
