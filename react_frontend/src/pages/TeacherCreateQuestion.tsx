import React, { useState } from "react";
import TeacherNavigationBar from "../components/TeacherNavigationBar";
import Form from "../components/Form";

const TeacherCreateQuestion: React.FC = () => {
  const [Type, setType]: [string, (Type: string) => void] = useState("");
  return (
    <div>
      <TeacherNavigationBar />
      <div className="flex justify-center items-center h-screen bg-blue-200">
        {Type === ""}&&
        <Form
          choices={[
            "Single Option Correct Question Type",
            "Multiple Option Correct Question Type",
            "Integer Answer Question Type",
          ]}
          label={"Choose a Question Type:"}
          onSubmit={(choice: string) => {
            setType(choice);
          }}
        />
        {Type === "Single Option Correct Question Type"}&&
        {Type === "Single Option Correct Question Type"}&&
        {Type === "Single Option Correct Question Type"}&&
      </div>
    </div>
  );
};

export default TeacherCreateQuestion;
