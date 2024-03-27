import React from "react";
import NavigationBar from "../components/StudentNavigationBar";
import GetText from "../api/GetTest";
const StudentUpcomingTest: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <GetText/>
    </div>
  );
};

export default StudentUpcomingTest;

