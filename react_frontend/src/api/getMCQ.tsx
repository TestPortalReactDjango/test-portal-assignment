import React, { useState, useEffect } from "react";
import axios from "axios";

interface MCQ {
  pk: number;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctOptions: string;
}

interface props {
  url: string;
}

const GetMCQ: React.FC<props> = (props) => {
  const { url } = props;
  const [question, setQuestion]: [MCQ|null, (question: MCQ|null) => void] = useState<MCQ|null>(null);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");
  useEffect(() => {
    axios
      .get<MCQ>(url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setQuestion(response.data);
        setLoading(false);
      })
      .catch((ex) => {
        const error =
          ex.response.status == 404
            ? "Resource Not Found"
            : "Unexpected Error Occured";
        setError(error);
        setLoading(false);
      })
  }, []);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ):(
        <li key={question?.pk}>
          <p>Question Type: Multiple Option Correct Question Type</p>
          <p>Question:{question?.question}</p>
          <p>A.:{question?.option1}</p>
          <p>B.:{question?.option2}</p>
          <p>C.:{question?.option3}</p>
          <p>D.:{question?.option4}</p>
        </li>
      ) }
    </div>
  );
  
};
export default GetMCQ;

