import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateSCQ from "../api/createSCQ";

interface SCQ {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctOption: string;
}

const FormSCQ = () => {
  const [question, setQuestion]: [
    string | null,
    (question: string | null) => void
  ] = useState<string | null>(null);
  const [option1, setOption1]: [
    string | null,
    (option1: string | null) => void
  ] = useState<string | null>(null);
  const [option2, setOption2]: [
    string | null,
    (option2: string | null) => void
  ] = useState<string | null>(null);
  const [option3, setOption3]: [
    string | null,
    (option3: string | null) => void
  ] = useState<string | null>(null);
  const [option4, setOption4]: [
    string | null,
    (option4: string | null) => void
  ] = useState<string | null>(null);
  const [correctOption, setCorrectOption]: [
    string | null,
    (correctOption: string | null) => void
  ] = useState<string | null>(null);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuestion(event.currentTarget.question.value);
    setOption1(event.currentTarget.option1.value);
    setOption2(event.currentTarget.option2.value);
    setOption3(event.currentTarget.option3.value);
    setOption4(event.currentTarget.option4.value);
    setCorrectOption(event.currentTarget.correctOption.value);
    if (
      question !== null &&
      option1 !== null &&
      option2 !== null &&
      option3 !== null &&
      option4 !== null &&
      correctOption !== null
    ) {
      const response =  await CreateSCQ({
        question: question,
        option1: option1,
        option2: option2,
        option3: option3,
        option4: option4,
        correctOption: correctOption,
      });
      if ((Number(response) === 200) || (Number(response) === 201)) {
        window.location.reload();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Question</legend>
        <input name="question" placeholder="Enter the Question: " />
      </fieldset>
      <fieldset>
        <legend>Option1</legend>
        <input name="option1" placeholder="Enter option1:" />
      </fieldset>
      <fieldset>
        <legend>Option2</legend>
        <input name="option2" placeholder="Enter option1:" />
      </fieldset>
      <fieldset>
        <legend>Option3</legend>
        <input name="option3" placeholder="Enter option1:" />
      </fieldset>
      <fieldset>
        <legend>Option4</legend>
        <input name="option4" placeholder="Enter option1:" />
      </fieldset>
      <fieldset>
        <label>
          Choose Correct Option:
          <select name="correctOption">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
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

export default FormSCQ;
