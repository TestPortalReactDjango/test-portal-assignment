import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Form from "../components/Form";
import AuthContext from "../context/AuthContext";
// import { stringify } from "querystring";
import { TestContext } from "../context/TestContext";


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
  submitUrl: string;
}

const GetSCQ: React.FC<Props> = ({ url, submitUrl }) => {
  const [question, setQuestion] = useState<SCQ | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const testID = useContext(TestContext);
  const obj = useContext(AuthContext);
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

  const handleSubmit = (option:string) => {
    setSelectedOption(option);
    if (question) {
      console.log("creating data")
      console.log(testID)
      const selectedIndex = question.option1 === option
        ? 0
        : question.option2 === option
          ? 1
          : question.option3 === option
            ? 2
            : 3;
      const data = {
        user:obj.user.user_id.toString(),
        test: testID.selectedTestPk, 
        qid: question.pk,
        qt: "SCQ", 
        sol: [(selectedIndex + 1)].toString, 
      };
      console.log(data.sol);
  
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
              submitAction={handleSubmit}
            />
          </div>
        )
      )}
    </div>
  );
};

export default GetSCQ;
