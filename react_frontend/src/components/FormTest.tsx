import React, { useState, useEffect } from "react";
import axios from "axios";
import GetQ from "../api/getQ";

const FormTest = () => {
  const [testname, setTestname]: [
    string | null,
    (testname: string | null) => void
  ] = useState<string | null>(null);
  const [numberOfQuestion, setNumberOfQuestion]: [
    number | null,
    (numberOfQuestion: number | null) => void
  ] = useState<number | null>(null);
  const [startTime, setStartTime]: [
    Date | null,
    (startTime: Date | null) => void
  ] = useState<Date | null>(null);
  const [endTime, setEndTime]: [
    Date | null,
    (endTime: Date) => void
  ] = useState<Date | null>(null);
  const [qRefTable, setQRefTable]: [
    number | null,
    (qRefTable: number | null) => void
  ] = useState<number | null>(null);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTestname(event.currentTarget.testname.value);
    setNumberOfQuestion(event.currentTarget.numberOfQuestion.value);
    setStartTime(event.currentTarget.startTime.value);
    setEndTime(event.currentTarget.endTime.value);
  };

  return (
    <>
    {(
        testname !== null &&
        numberOfQuestion !== null &&
        startTime !== null &&
        endTime !== null
      )
        ?(
          <GetQ testname={testname} numberOfQuestion={numberOfQuestion} startTime={startTime} endTime={endTime}/>)
      :(
        <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Testname</legend>
        <input name="testname" placeholder="Enter the testname: " />
      </fieldset>
      <fieldset>
        <legend>Number Of Question</legend>
        <input type="number" name="numberOfQuestion" min={1} max={30} placeholder="Enter the number of question:" />
      </fieldset>
      <fieldset>
        <legend>Start Time</legend>
        <input type="datetime-local" name="startTime" placeholder="Enter the start time:" />
      </fieldset>
      <fieldset>
        <legend>End Time</legend>
        <input type="datetime-local" name="endTime" placeholder="Enter the end time:" />
      </fieldset>
      <button
        className="bg-blue-500 text-white rounded py-2 px-4 mb-2"
        type="submit"
      >
        Submit
      </button>
    </form>
    )}
    </>
  );
};

export default FormTest;
