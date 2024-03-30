import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateIQ from "../api/createIQ";
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
    if(question!==null&&correctOption!==null){
        CreateIQ({question:question,correctOption:correctOption});
    }
};
  return (
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Question</legend>
          <input
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
  );
};


export default FormIQ;
