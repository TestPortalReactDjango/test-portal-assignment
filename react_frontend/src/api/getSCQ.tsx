import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "../components/Form";

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
  const [question, setQuestion] = useState<SCQ | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

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
          ex.response.status === 404
            ? "Resource Not Found"
            : "Unexpected Error Occurred";
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        question && (
          <li key={question.pk}>
            <p>Question Type: Single Option Correct Question Type</p>
            <p>Question: {question.question}</p>
            <p>A: {question.option1}</p>
            <p>B: {question.option2}</p>
            <p>C: {question.option3}</p>
            <p>D: {question.option4}</p>
            <Form
              choices={[
                question.option1,
                question.option2,
                question.option3,
                question.option4,
              ]}
              label={"Answer:"}
              submitAction={(choice: string) => {}}
            />
          </li>
        )
      )}
    </div>
  );
};

export default GetSCQ;