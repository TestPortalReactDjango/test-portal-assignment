import React, { useState ,useEffect} from "react";
import TeacherNavigationBar from "../components/TeacherNavigationBar";
import Form from "../components/Form";
import FormSCQ from "../api/createSCQ";
import FormIQ from "../api/createIQ";
import FormMCQ from "../api/createMCQ";

const TeacherCreateQuestion: React.FC = () => {
  const [Type, setType]: [string, (Type: string) => void] = useState("");
  // const useEffect(()=>,[Type]);
  return (
    <div>
      <TeacherNavigationBar />
      <div className="flex justify-center items-center h-screen bg-blue-200">
        {Type === ""&&
        <Form
          choices={[
            "Single Option Correct Question Type",
            "Multiple Option Correct Question Type",
            "Integer Answer Question Type",
          ]}
          label={"Choose a Question Type:"}
          submitAction={(choice: string) => {
            setType(choice);
          }}
        />}
        {Type === "Single Option Correct Question Type"&&<FormSCQ/>}
        {Type === "Multiple Option Correct Question Type"&&<FormMCQ/>}
        {Type === "Integer Answer Question Type"&&<FormIQ/>}
      </div>
    </div>
  );
};

export default TeacherCreateQuestion;
