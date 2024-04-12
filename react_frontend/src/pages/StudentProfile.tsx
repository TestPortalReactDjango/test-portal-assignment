import React, { useContext } from "react";
import NavigationBar from "../components/StudentNavigationBar";
import AuthContext from "../context/AuthContext";

interface User {
  name: string;
  email: string;
}

const StudentProfile: React.FC = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <div>
      <NavigationBar />
      {<img src="../assets/icons/man-avatar-profile-picture-vector-illustration_268834-538.png" alt="Profile Image" />}
      <h1>Username : {user.username}</h1>
      <p>Email : {user.email}</p>
    </div>
  );
};

export default StudentProfile;
