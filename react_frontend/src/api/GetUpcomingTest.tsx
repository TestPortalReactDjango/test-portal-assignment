import React, { useState, useEffect } from "react";
import axios from "axios";

interface Test {
  pk: number;
  testname: string;
  numberOfQuestion: number; // Corrected type to 'number'
  startTime: Date;
  endTime: Date;
  // qRefTable: number; // Assuming this field is not needed for display
}

const GetUpcomingTests = () => {
  const [tests, setTests] = useState<Test[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); // Corrected error type

  useEffect(() => {
    const fetchUpcomingTests = async () => {
      try {
        const response = await axios.get<Test[]>(
          "http://127.0.0.1:8000/test/api/tests/",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
        setTests(response.data);
        setLoading(false);
      } catch (error:any) {
        const errorMessage = error.response?.status === 404
          ? "Resource Not Found"
          : "An unexpected error occurred";
        setError(errorMessage);
        setLoading(false);
      }
    };

    fetchUpcomingTests();
  }, []);
  // const current_time = new Date();

  const upcomingTests = tests.filter((test) => new Date(test.startTime) > new Date());
  console.log(upcomingTests) 
  return (
    <div className="student-upcoming-test">
      {loading ? (
        <p>Loading upcoming tests...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : upcomingTests.length === 0 ? (
        <p>No upcoming tests found.</p>
      ) : (
        <ul className="upcoming-tests">
          {upcomingTests.map((test) => (
            <li key={test.pk} className="test-card">
              <h3 className="test-title">{test.testname}</h3>
              <div className="test-details">
                <p>
                  <span className="detail-label">Number of Questions:</span>
                  {test.numberOfQuestion}
                </p>
                <p>
                  <span className="detail-label">Start Time:</span>
                  {test.startTime.toLocaleString()}
                </p>
                <p>
                  <span className="detail-label">End Time:</span>
                  {test.endTime.toLocaleString()}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GetUpcomingTests;
