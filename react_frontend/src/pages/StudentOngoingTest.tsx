import React from "react";
import NavigationBar from "../components/StudentNavigationBar";
import GetTest from "../api/GetTest";
const StudentOngoingTest: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <GetTest/>
    </div>
  );
};

export default StudentOngoingTest;
