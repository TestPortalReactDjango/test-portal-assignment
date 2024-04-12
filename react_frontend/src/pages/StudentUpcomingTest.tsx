import React, { useContext } from "react";
import NavigationBar from "../components/StudentNavigationBar";
import GetUpcomingText from "../api/GetUpcomingTest";
import AuthContext from "../context/AuthContext";
const StudentUpcomingTest: React.FC = () => {
  const obj = useContext(AuthContext);
  
  function handleSubmit() {
    console.log("WE ARE PRINTNG ");
    console.log(obj.user.user_id);
  }

  return (
    <div>
      <NavigationBar />
      <GetUpcomingText/>
      <button onClick={handleSubmit}>BUTTON HERE BISHES</button>
    </div>
  );
};

export default StudentUpcomingTest;

