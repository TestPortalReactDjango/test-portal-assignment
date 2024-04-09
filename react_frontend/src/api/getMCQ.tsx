import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "../components/Form"; // Assuming Form handles multiple selections

interface MCQ {
  pk: number;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctOption: string; // Might be an array for multiple correct options
}

interface props {
  url: string;
  submitUrl: string;
}

const GetMCQ: React.FC<props> = (props) => {
  const { url, submitUrl } = props;
  const [question, setQuestion] = useState<MCQ | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]); // Array for multiple selections

  const submitAction = (selected: string) => {
    const updatedAnswers = [...selectedAnswers]; // Copy the array
    if (updatedAnswers.includes(selected)) {
      // Option already selected, remove it
      updatedAnswers.splice(updatedAnswers.indexOf(selected), 1);
    } else {
      // Option newly selected, add it
      updatedAnswers.push(selected);
    }
    setSelectedAnswers(updatedAnswers);
  };
  
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
            <p>Question Type: Multiple Choice Question Type</p>
            <p>Question: {question.question}</p>
            <p>A: {question.option1}</p>
            <p>B: {question.option2}</p>
            <p>C: {question.option3}</p>
            <p>D: {question.option4}</p>
            choices={[
              question.option1,
              question.option2,
              question.option3,
              question.option4,
            ]}
            <Form
              label={"Answer (Select all that apply):"}
              submitAction={submitAction}
            />
            <button onClick={submitAction}>Submit Answer</button>
          </li>
        )
      )}
    </div>
  );
};

export default GetMCQ;
