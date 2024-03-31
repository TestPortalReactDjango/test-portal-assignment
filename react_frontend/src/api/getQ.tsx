import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import GetQRef from "./getQRef";
import CreateQType from "./createQType";
import CreateQRef from "./createQRef";
import CreateTest from "./createTest";

interface SCQ {
  pk: number;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctOption: string;
}

interface MCQ {
  pk: number;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctOptions: string;
}

interface IQ {
  pk: number;
  question: string;
  correctOption: number;
}

interface props {
  testname: string;
  numberOfQuestion: number;
  startTime: Date;
  endTime: Date;
}

const SCQs: SCQ[] = [];
const MCQs: MCQ[] = [];
const IQs: IQ[] = [];
const GetQ: React.FC<props> = (props) => {
  const [create, setCreate]: [boolean, (create: boolean) => void] =
    useState(false);
  const [complete, setComplete]: [boolean, (complete: boolean) => void] =
    useState(false);
  const { testname, numberOfQuestion, startTime, endTime } = props;
  let i = 0;
  let arr: number[] = [];
  const addQ = async (pk: number) => {
    while (arr.length <= numberOfQuestion) {
      arr.push(pk);
      console.log(arr);
      console.log(arr.length);
      if (arr.length == numberOfQuestion) {
        setComplete(true);
        const responseqref = await CreateQRef({ arrqType: arr });
        const qRefTable = Number(responseqref.pk);
        console.log(responseqref);
        if (
          testname !== null &&
          numberOfQuestion !== null &&
          startTime !== null &&
          endTime !== null &&
          qRefTable !== null
        ) {
          const response = await CreateTest({
            testname: testname,
            numberOfQuestion: numberOfQuestion,
            startTime: startTime,
            endTime: endTime,
            qRefTable: qRefTable,
          });
          if (Number(response) === 200 || Number(response) === 201) {
            setCreate(true);
            setTimeout(() => {
              window.location.reload();
            }, 5000);
          }
        }
      }
      return;
    }
  };
  const [scqs, setscqs]: [SCQ[], (scqs: SCQ[]) => void] = useState(SCQs);
  const [mcqs, setmcqs]: [MCQ[], (mcqs: MCQ[]) => void] = useState(MCQs);
  const [iqs, setiqs]: [IQ[], (iqs: IQ[]) => void] = useState(IQs);
  useEffect(() => {
    axios
      .get<SCQ[]>("http://127.0.0.1:8000/questions/single/", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setscqs(response.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get<MCQ[]>("http://127.0.0.1:8000/questions/multiple/", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setmcqs(response.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get<IQ[]>("http://127.0.0.1:8000/questions/integer/", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setiqs(response.data);
      });
  }, []);
  return (
    <div className="flex flex-col items-start w-full ">
      {create ? (
        <p className="items-center text-lg font-bold">Test Created!</p>
      ) : complete ? (
        <p className="items-center text-lg font-bold">
          Please wait while the test is being Created!
        </p>
      ) : (
        <div>
          <p className="text-lg font-bold">
            Single Correct Option Question Type
          </p>
          <ul className="w-5/6">
            {scqs.map((scq) => (
              <li
                key={scq.pk}
                className="bg-gray-200 p-4 m-4 border border-gray-400 rounded-lg w-full"
              >
                <p>Question: {scq.question}</p>
                <p>A: {scq.option1}</p>
                <p>B: {scq.option2}</p>
                <p>C: {scq.option3}</p>
                <p>D: {scq.option4}</p>
                <p>Correct Option: {scq.correctOption}</p>
                <button
                  className="bg-blue-500 text-white rounded py-2 px-4 mb-2"
                  onClick={async () => {
                    console.log("clicked");
                    const responseqtype = await CreateQType({
                      single: scq.pk,
                      multiple: null,
                      integer: null,
                    });
                    addQ(responseqtype.pk);
                  }}
                >
                  Add Question
                </button>
              </li>
            ))}
          </ul>
          <p className="text-lg font-bold">
            Multiple Correct Option Question Type
          </p>
          <ul className="w-5/6">
            {mcqs.map((mcq) => (
              <li
                key={mcq.pk}
                className="bg-gray-200 p-4 m-4 border border-gray-400 rounded-lg w-full"
              >
                <p>Question: {mcq.question}</p>
                <p>A: {mcq.option1}</p>
                <p>B: {mcq.option2}</p>
                <p>C: {mcq.option3}</p>
                <p>D: {mcq.option4}</p>
                <p>Correct Options: {mcq.correctOptions}</p>
                <button
                  className="bg-blue-500 text-white rounded py-2 px-4 mb-2"
                  onClick={async () => {
                    const responseqtype = await CreateQType({
                      single: null,
                      multiple: mcq.pk,
                      integer: null,
                    });
                    addQ(responseqtype.pk);
                  }}
                >
                  Add Question
                </button>
              </li>
            ))}
          </ul>
          <p className="text-lg font-bold">Integer Answer Question Type</p>
          <ul className="w-5/6">
            {iqs.map((iq) => (
              <li
                key={iq.pk}
                className="bg-gray-200 p-4 m-4 border border-gray-400 rounded-lg w-full"
              >
                <p>Question: {iq.question}</p>
                <p>Correct Option: {iq.correctOption.toString()}</p>
                <button
                  className="bg-blue-500 text-white rounded py-2 px-4 mb-2"
                  onClick={async () => {
                    const responseqtype = await CreateQType({
                      single: null,
                      multiple: null,
                      integer: iq.pk,
                    });
                    addQ(responseqtype.pk);
                  }}
                >
                  Add Question
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GetQ;
