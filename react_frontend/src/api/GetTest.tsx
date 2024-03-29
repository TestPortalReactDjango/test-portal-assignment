import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import GetQRef from "./getQRef";

interface Test {
  pk: number;
  testname: string;
  numberOfQuestion: Number;
  startTime: Date;
  endTime: Date;
  qRefTable: number;
}

const OngoingTests: Test[] = [];
type nullTest = Test | null;
const GetTest:React.FC= () => {
  const [tests, setTests]: [Test[], (tests: Test[]) => void] =
    useState(OngoingTests);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");
  const [selectedTest, setTest]: [nullTest, (selectedTest: nullTest) => void] =
    useState<nullTest>(null);
  useEffect(() => {
    axios
      .get<Test[]>("http://127.0.0.1:8000/test/test/", {
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
          ex.response.status ===404
            ? "Resource Not Found"
            : "Unexpected Error Occured";
        setError(error);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : selectedTest ? (
        <>{<GetQRef url={`http://127.0.0.1:8000/questions/qrefRetrieve/${selectedTest.qRefTable}`}/>}</>
      ) : (
        <ul>
          {tests
            .filter(
              (test) =>
                new Date(test.startTime) <= new Date() &&
                new Date(test.endTime) >= new Date()
            )
            .map((test) => (
              <li key={test.pk}>
                <h6 className="font-bold">{test.testname}</h6>
                <p>Total Questions: {test.numberOfQuestion.toString()}</p>
                <p>Start Time: {test.startTime.toString()}</p>
                <p>End Time: {test.endTime.toString()}</p>
                <Link to="">
                  <Button
                    text="Start Test"
                    onClick={() => setTest(test)}
                  ></Button>
                </Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};



export default GetTest;
