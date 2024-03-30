import React, { useState, useEffect } from "react";
import axios from "axios";

interface IQ {
  question: string;
  correctOption: number;
}

const FormIQ = () => {
  const [question, setQuestion]: [
    string | null,
    (question: string | null) => void
  ] = useState<string | null>(null);

  const [correctOption, setCorrectOption]: [
    number | null,
    (correctOption: number | null) => void
  ] = useState<number | null>(null);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuestion(event.currentTarget.question.value);
    setCorrectOption(Number(event.currentTarget.correctOption.value));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Question</legend>
          <input
            type="question"
            name="question"
            placeholder="Enter the Question: "
          />
        </fieldset>
        <fieldset>
          <label>
            Choose Correct Option:
            <select name="correctOption">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </label>
        </fieldset>
        <button
          className="bg-blue-500 text-white rounded py-2 px-4 mb-2"
          type="submit"
        >
          Submit
        </button>
      </form>
      {question !== null && correctOption !== null && (
        <CreateIQ question={question} correctOption={correctOption} />
      )}
    </>
  );
};

const CreateIQ: React.FC<IQ> = (IQ) => {
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");
  const { question, correctOption } = IQ;
  useEffect(() => {
    axios
      .post(
        "http://127.0.0.1:8000/questions/integer/",
        { question: question, correctOption: correctOption },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setLoading(false);
      })
      .catch((ex) => {
        const error =
          ex.response.status == 404
            ? "Resource Not Found"
            : "Unexpected Error Occured";
        setError(error);
        setLoading(false);
      });
  }, []);
  return <></>;
};

export default FormIQ;
