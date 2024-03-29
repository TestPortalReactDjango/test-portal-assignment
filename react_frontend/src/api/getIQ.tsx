import React, { useState, useEffect } from "react";
import axios from "axios";

interface IQ {
  pk: number;
  question: string;
  correctOption: number;
}
interface props {
  url: string;
}

const GetIQ: React.FC<props> = (props) => {
  const { url } = props;
  const [question, setQuestion]: [IQ|null, (question: IQ|null) => void] = useState<IQ|null>(null);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");
  useEffect(() => {
    axios
      .get<IQ>(url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setQuestion(response.data);
        setLoading(false);
      })
      .catch((ex) => {
        const error =
          ex.response.status == 404
            ? "Resource Not Found"
            : "Unexpected Error Occured";
        setError(error);
        setLoading(false);
      })
  }, []);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <li key={question?.pk}>
          <p>Question Type: Integer Type Answer Question Type</p>
          <p>Question:{question?.question}</p>
        </li>
      )}
    </div>
  );
  
};
export default GetIQ;

