import React, { useState , useEffect} from "react";
import axios from "axios";

interface IntegerTypeQ {
  pk: number;
  question: string;
}

interface Props {
  url: string;
  submitUrl: 'http://127.0.0.1:8000/test/api/response_insert/';
}

const GetIntegerTypeQ: React.FC<Props> = ({ url, submitUrl }) => {
  const [question, setQuestion] = useState<IntegerTypeQ | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [response, setResponse] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get<IntegerTypeQ>(url, {
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
    if (question && response !== null) {
      const data = {
        user: "UserID",
        test: "TestID",
        qid: question.pk,
        qt: "IQ",
        sol: response,
      };

      axios
        .post(submitUrl, data, {
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
            <p>Question Type: Integer Type Question</p>
            <p>Question: {question.question}</p>
            <input
              type="number"
              value={response !== null ? response : ""}
              onChange={(e) => setResponse(parseInt(e.target.value))}
            />
            <button onClick={handleSubmit}>Submit Response</button>
          </div>
        )
      )}
    </div>
  );
};

export default GetIntegerTypeQ;
