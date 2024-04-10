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

interface Props {
  url: string;
  submitUrl: 'http://127.0.0.1:8000/test/api/response_insert/';
}

const GetSCQ: React.FC<Props> = ({ url, submitUrl }) => {
  const [question, setQuestion] = useState<SCQ | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");

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
          ex.response && ex.response.status === 404
            ? "Resource Not Found"
            : "An unexpected error occurred";
        setError(error);
        setLoading(false);
      });
  }, [url]);

  const handleSubmit = () => {
    if (question && selectedOption) {
      // Construct the tuple with question and selected option
      const solTuple: [number, string] = [question.pk, selectedOption];

      axios.post(submitUrl, { sol: solTuple }, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        alert("Response submitted successfully");
      })
      .catch((error) => {
        console.error("Submission error:", error);
        alert("Failed to submit response");
      });
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        question && (
          <div key={question.pk}>
            <p>Question Type: Single Choice Question</p>
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
              submitAction={setSelectedOption}
            />
            <button onClick={handleSubmit}>Submit Answer</button>
          </div>
        )
      )}
    </div>
  );
};

export default GetSCQ;
