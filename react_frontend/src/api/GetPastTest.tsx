import React, { useState, useEffect } from "react";
import axios from "axios";

interface Test {
  pk: number;
  testname: string;
  numberOfQuestion: Number;
  startTime: Date;
  endTime: Date;
  //   qRefTable: number;
}

const PastTests: Test[] = [];

const GetPastTest = () => {
  const [tests, setTests]: [Test[], (tests: Test[]) => void] =
    useState(PastTests);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");
  useEffect(() => {
    axios
      .get<Test[]>("", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setTests(response.data);
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
  return (
    <div>
      loading?(
      <p>Loading...</p>):error?(<p>{error}</p>):(
      <ul>
      {tests.filter(test=> new Date(test.startTime)<=new Date()).map((test) => (
            <li key={test.pk}>
              <h6 className="font-bold">{test.testname}</h6>
              <p>Total Questions: {test.numberOfQuestion.toString()}</p>
              <p>Start Time: {test.startTime.toString()}</p>
              <p>End Time: {test.endTime.toString()}</p>
            </li>
          ))}
      </ul>
      )
    </div>
  );
};

export default GetPastTest;