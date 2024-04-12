import React from "react";
import NavigationBar from "../components/StudentNavigationBar";
import GetPastTest from "../api/GetPastTest";
import { TestProvider } from "../context/TestContext";

const StudentPastAttempts: React.FC = () => {
  return (
    <div>
      <TestProvider>
        <NavigationBar />
        <GetPastTest />
      </TestProvider>
    </div>
  );
};

export default StudentPastAttempts;
