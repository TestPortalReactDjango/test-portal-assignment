import React, { useContext, useState , useEffect} from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { TestContext } from "../context/TestContext";
// import { stringify } from "querystring";


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
  const testID = useContext(TestContext);
  const obj = useContext(AuthContext);

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
      const solTuple = [question.pk, response];
  
      const data = {
        user: new URLSearchParams({user_id: obj.user.user_id}).toString(),
        test: testID, 
        qid : question.pk,
        qt: "IQ",
        sol: solTuple, 
      };
  
      axios.post(submitUrl, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        alert("Response submitted successfully");
      })
      .catch((error) => {
        console.error("Submission error:", error);
        alert("Failed to submit response");
      });
    } else {
      // Handle the case where no response is provided
      alert("Please enter a response before submitting.");
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
