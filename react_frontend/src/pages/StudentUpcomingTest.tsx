import React from "react";
import NavigationBar from "../components/StudentNavigationBar";
import GetUpcomingText from "../api/GetUpcomingTest";
const StudentUpcomingTest: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <GetUpcomingText/>
    </div>
  );
};

export default StudentUpcomingTest;

