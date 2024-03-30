import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateMCQ from "../api/createMCQ";

const FormMCQ = () => {
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
  const [correctOptions, setCorrectOptions]: [
    string | null,
    (correctOptions: string | null) => void
  ] = useState<string | null>(null);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuestion(event.currentTarget.question.value);
    setOption1(event.currentTarget.option1.value);
    setOption2(event.currentTarget.option2.value);
    setOption3(event.currentTarget.option3.value);
    setOption4(event.currentTarget.option4.value);
    setCorrectOptions(event.currentTarget.correctOptions.value);
    if (
        question !== null &&
        option1 !== null &&
        option2 !== null &&
        option3 !== null &&
        option4 !== null &&
        correctOptions !== null
      ) {
        CreateMCQ({
          question: question,
          option1: option1,
          option2: option2,
          option3: option3,
          option4: option4,
          correctOptions: correctOptions,
        });
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
          <legend>Option1</legend>
          <input name="option1" placeholder="Enter option1:" />
        </fieldset>
        <fieldset>
          <legend>Option2</legend>
          <input name="option2" placeholder="Enter option2:" />
        </fieldset>
        <fieldset>
          <legend>Option3</legend>
          <input name="option3" placeholder="Enter option3:" />
        </fieldset>
        <fieldset>
          <legend>Option4</legend>
          <input name="option4" placeholder="Enter option4:" />
        </fieldset>
        <fieldset>
          <label>
            Choose Correct Options:
            <select name="correctOptions" multiple={true}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="1,2">1,2</option>
              <option value="1,3">1,3</option>
              <option value="1,4">1,4</option>
              <option value="2,3">2,3</option>
              <option value="2,4">2,4</option>
              <option value="3,4">3,4</option>
              <option value="1,2,3">1,2,3</option>
              <option value="1,2,4">1,2,4</option>
              <option value="1,3,4">1,3,4</option>
              <option value="2,3,4">2,3,4</option>
              <option value="1,2,3,4">1,2,3,4</option>
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


export default FormMCQ;
