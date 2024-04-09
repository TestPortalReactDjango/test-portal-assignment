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
  submitUrl: string;
}

const GetSCQ: React.FC<props> = (props) => {
  const { url, submitUrl } = props;
  const [question, setQuestion] = useState<SCQ | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const submitAnswer = async () => {
    if (!selectedAnswer) {
      alert("Please select an answer before submitting.");
      return;
    }
  
    try {
      const response = await axios.post(submitUrl, {
        questionId: question?.pk,
        userAnswer: selectedAnswer, // Use selectedAnswer directly
      });
      console.log("Submit Response:", response.data);
      // ... handle response
    } catch (error) {
      console.error("Submit Error:", error);
      // ... handle errors
    }
  };
  const handleAnswerSubmit = (selectedChoice: string | number) => {
    setSelectedAnswer(selectedChoice);
    // Perform additional actions, e.g., sending the answer to the server
  };
  
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
              choices={[
                question.option1,
                question.option2,
                question.option3,
                question.option4,
              ]}
              <Form
            label={"Answer:"}
            submitAction={setSelectedAnswer}
            // No need for empty array: choices={[question.option1, ...]}
            choices={[question.option1, question.option2, question.option3, question.option4]}
          />
          <button onClick={handleAnswerSubmit}>Submit Answer</button>
          </li>
        )
      )}
    </div>
  );
};

export default GetSCQ;
