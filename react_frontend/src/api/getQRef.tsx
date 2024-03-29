import React, { useState, useEffect } from "react";
import axios from "axios";

interface qRefTable {
  pk: number;
  q1: number;
  q2: number;
  q3: number;
  q4: number;
  q5: number;
  q6: number;
  q7: number;
  q8: number;
  q9: number;
  q10: number;
  q11: number;
  q12: number;
  q13: number;
  q14: number;
  q15: number;
  q16: number;
  q17: number;
  q18: number;
  q19: number;
  q20: number;
  q21: number;
  q22: number;
  q23: number;
  q24: number;
  q25: number;
  q26: number;
  q27: number;
  q28: number;
  q29: number;
  q30: number;
}

// const qRef:qRefTable|null=null;
const GetQRef = () => {
  const [qRef, setqRef]: [qRefTable | null, (qRef: qRefTable | null) => void] =
    useState<qRefTable | null>(null);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");

  useEffect(() => {
    axios
      .get<qRefTable>("", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setqRef(response.data);
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
  return(<div>
    {loading ? (
      <p>Loading...</p>
    ) : error ? (
      <p>{error}</p>
    ) : (
      <ul>
        {/* {qRef
          
          .map((q) => (
            <li key={test.pk}>
              
            </li>
          ))} */}
      </ul>
    )}
  </div>)
};
