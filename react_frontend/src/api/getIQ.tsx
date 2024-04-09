import React, { useState, useEffect } from "react";
import axios from "axios";

interface IQ {
  pk: number;
  question: string;
  correctOption: number;
}

interface props {
  url: string;
  submitUrl: string;
}

const GetIQ: React.FC<props> = (props) => {
  const { url, submitUrl } = props;
  const [question, setQuestion] = useState<IQ | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [userAnswer, setUserAnswer] = useState(""); // String for user input

  const submitAnswer = async () => {
    if (!userAnswer) {
      alert("Please enter your answer before submitting.");
      return;
    }

    const parsedAnswer = parseInt(userAnswer, 10); // Parse user input to integer
    if (isNaN(parsedAnswer)) {
      alert("Please enter a valid integer answer.");
      return;
    }

    try {
      const response = await axios.post(submitUrl, {
        questionId: question?.pk,
        userAnswer: parsedAnswer,
      });
      console.log("Submit Response:", response.data); // Handle response here
      // You can display a success message, handle errors, etc.
    } catch (error) {
      console.error("Submit Error:", error);
      // Handle errors appropriately, e.g., display an error message
    }
  };

  useEffect(() => {
    axios
      .get<IQ>(url, {
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
            <p>Question Type: Integer Input Question Type</p>
            <p>Question: {question.question}</p>
            <input
              type="number"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Enter your answer"
            />
            <button onClick={submitAnswer}>Submit Answer</button>
          </li>
        )
      )}
    </div>
  );
};

export default GetIQ;
