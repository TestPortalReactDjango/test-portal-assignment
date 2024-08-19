import React, { useContext,useState, useEffect } from "react";
import axios from "axios";
import Button from "../components/Button";
import { Link , useNavigate  } from "react-router-dom";
import GetQRef from "./getQRef";
// import { Redirect\\\\ } from "react-router";
import { TestContext } from "../context/TestContext";
import { TestProvider } from "../context/TestContext";
import AuthContext from "../context/AuthContext";

// const  TestProvider } = require("../context/TestContext");

interface Test {
  pk: number;
  testname: string;
  numberOfQuestion: number;
  startTime: Date;
  endTime: Date;
  qRefTable: number;
}

const OngoingTests: Test[] = [];
type nullTest = Test | null;
const GetTest: React.FC = () => {
  const [tests, setTests]: [Test[], (tests: Test[]) => void] =
    useState(OngoingTests);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");
  const [selectedTest, setTest]: [nullTest, (selectedTest: nullTest) => void] =
    useState<nullTest>(null);
    const navigate = useNavigate();
  // const history = useHistory();
  const obj=useContext(AuthContext);
  const { selectedTestPk, setSelectedTestPk } = useContext(TestContext) || { selectedTestPk: null, setSelectedTestPk: () => {} };
  useEffect(() => {
    axios
      .get<Test[]>("http://127.0.0.1:8000/test/api/tests/", {
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
          ex.response.status === 404
            ? "Resource Not Found"
            : "Unexpected Error Occured";
        setError(error);
        setLoading(false);
      });
  }, []);

  

  const handleFinalSubmit = async () => {
    console.log()
    // Assuming you have a mechanism to collect user answers (selectedAnswers)
    if (!selectedTest) {
      alert("Please select a test to submit.");
      return;
    }
    console.log(obj.user.user_id,selectedTest.pk);
    const testData = {
      user: obj.user.user_id, // Replace with actual user ID
      test: selectedTest.pk,
      // Add user answers here (replace with your logic)
      // answers: selectedAnswers, // Replace with your answer collection logic
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/test/api/calc_marks/", // Replace with your endpoint
        testData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const marks = response.data.marks; // Assuming 'marks' is returned by the API
      alert("Test submitted successfully! Your marks are: " + marks); // Display marks
      navigate("/studentUpcomingTest");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit test. Please try again.");
    }
  };

  
  return (
    <div>
      <TestProvider>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : selectedTest ? (
        <>
          {
            <GetQRef
              url={`http://127.0.0.1:8000/questions/qrefRetrieve/${selectedTest.qRefTable}`}
            // testId = {test.pk}
            />
          }
          <button className="bg-blue-500 text-white rounded py-2 px-4 mb-2" onClick={handleFinalSubmit} // Pass the onClick handler function
>Submit Test</button>
            
          
        </>
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
                  <button
                    className="bg-blue-500 text-white rounded py-2 px-4 mb-2"
                    onClick={() => {
                      setTest(test);
                      setSelectedTestPk(test.pk);
                    }}
                  >
                    Start Test
                  </button>
                </Link>
              </li>
            ))}
        </ul>
      )}
      </TestProvider>
    </div>
  );
};

export default GetTest;
