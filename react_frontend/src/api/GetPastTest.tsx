import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { TestContext } from "../context/TestContext";

interface Test {
    pk: number;
    testname: string;
    numberOfQuestion: number; // Corrected type to 'number'
    startTime: Date;
    endTime: Date;
    marks?: number
}

const GetUpcomingTests = () => {
    const [tests, setTests] = useState<Test[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null); // Corrected error type
    const [marks, setMarks] = useState<number>()


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
        } catch (error: any) {
            const errorMessage = error.response?.status === 404
                ? "Resource Not Found"
                : "An unexpected error occurred";
            setError(errorMessage);
            setLoading(false);
        }
    };

    // fetchUpcomingTests();
    const obj = useContext(AuthContext);
    const testID = useContext(TestContext);
    const fetchmarks = async () => {
        
        const userdata = {
            user: new URLSearchParams({ user_id: obj.user.user_id }).toString(),
            test: testID
        }
        try {
            const resp = await axios.post("http://127.0.0.1:8000/test/api/calc_marks/", userdata)
                .then((resp) => {
                    setMarks(resp.data.marks)
                })
        }
        catch (error) {
            console.log("failed to fetch marks!")
        }
    }
    // fetchmarks();

    useEffect(()=>{
        fetchUpcomingTests();
        fetchmarks();
    },[]);


    // const current_time = new Date();

    const pastTests = tests.filter((test) => new Date(test.endTime) < new Date());
    //   console.log(upcomingTests) 
    return (
        <div className="student-upcoming-test">
            {loading ? (
                <p>Loading upcoming tests...</p>
            ) : error ? (
                <p className="error-message">{error}</p>
            ) : pastTests.length === 0 ? (
                <p>No upcoming tests found.</p>
            ) : (
                <ul className="upcoming-tests">
                    {pastTests.map((test) => (
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
                                <p>
                                    <span className="detail-label">Marks:</span>
                                    {marks}
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
