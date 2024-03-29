import React, { useState, useEffect } from "react";
import axios from "axios";

interface SCQ {
  pk: number;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctOption: string;
}

interface props {
  url: string;
}

const GetSCQ: React.FC<props> = (props) => {
  const { url } = props;
  const [question, setQuestion]: [SCQ|null, (question: SCQ|null) => void] = useState<SCQ|null>(null);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");
  useEffect(() => {
    axios
      .get<SCQ>(url, {
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
      ) : (
        <li key={question?.pk}>
          <p>Question Type: Single Option Correct Question Type</p>
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
export default GetSCQ;

