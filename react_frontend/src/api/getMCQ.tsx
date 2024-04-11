import React, { useState, useEffect } from "react";
import axios from "axios";

interface MCQ {
  pk: number;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctOptions: string[];
}

interface Props {
  url: string;
  submitUrl: 'http://127.0.0.1:8000/test/api/response_insert/'; 
}

const GetMCQ: React.FC<Props> = ({ url, submitUrl }) => {
  const [question, setQuestion] = useState<MCQ | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

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
          ex.response && ex.response.status === 404
            ? "Resource Not Found"
            : "An unexpected error occurred";
        setError(error);
        setLoading(false);
      });
  }, [url]);

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedOptions((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleSubmit = () => {
    if (question && selectedOptions.length > 0) {
      // Create a tuple where the first element is the question pk
      // and the second element is the array of selected options.
      const solTuple = [selectedOptions];
  
      const data = {
        user: "UserID", // Placeholder - adjust as necessary
        test: "TestID", // Placeholder - adjust as necessary
        qid: question.pk, // You might not need this separately since it's included in the tuple
        qt: "MCQ", // Question type
        sol: solTuple, // The tuple as the solution
      };
  
      axios.post(submitUrl, data, {
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
    } else {
      // Handle the case where no options are selected
      alert("Please select at least one option before submitting.");
    }
  };
  

  const options = question ? [question.option1, question.option2, question.option3, question.option4] : [];

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : question && (
        <div>
          <p>Question Type: Multiple Option Correct Question Type</p>
          <p>Question: {question.question}</p>
          {options.map((option, index) => (
            <div key={index}>
              <label>
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedOptions.includes(option)}
                  onChange={handleOptionChange}
                /> {option}
              </label>
            </div>
          ))}
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default GetMCQ;
