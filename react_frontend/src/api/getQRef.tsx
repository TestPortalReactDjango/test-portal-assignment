import React, { useState, useEffect } from "react";
import axios from "axios";
import GetSCQ from "./getSCQ";
import GetMCQ from "./getMCQ";
import GetIQ from "./getIQ";
import GetQType from "./getQType";

interface props {
  url: string;
}

const GetQRef: React.FC<props> = (props) => {
  const { url } = props;
  const [qRef, setqRef]: [number[], (qRef: number[]) => void] = useState<
    number[]
  >([]);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const {
          q1,
          q2,
          q3,
          q4,
          q5,
          q6,
          q7,
          q8,
          q9,
          q10,
          q11,
          q12,
          q13,
          q14,
          q15,
          q16,
          q17,
          q18,
          q19,
          q20,
          q21,
          q22,
          q23,
          q24,
          q25,
          q26,
          q27,
          q28,
          q29,
          q30,
        } = response.data;
        const arr: number[] = [
          q1,
          q2,
          q3,
          q4,
          q5,
          q6,
          q7,
          q8,
          q9,
          q10,
          q11,
          q12,
          q13,
          q14,
          q15,
          q16,
          q17,
          q18,
          q19,
          q20,
          q21,
          q22,
          q23,
          q24,
          q25,
          q26,
          q27,
          q28,
          q29,
          q30,
        ];
        setqRef(arr);
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
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {React.Children.toArray(
            qRef.map(
              (i) =>
                i !== null && (
                  <GetQType
                    url={`http://127.0.0.1:8000/questions/qtypeRetrieve/${i}/`}
                    // testID ={testID}
                  />
                )
            )
          )}
        </ul>
      )}
    </div>
  );
};
export default GetQRef;
