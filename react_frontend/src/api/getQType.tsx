import React, { useState, useEffect } from "react";
import axios from "axios";
import GetSCQ from "./getSCQ";
import GetMCQ from "./getMCQ";
import GetIQ from "./getIQ";

interface qType {
  pk: number;
  single: number | null;
  multiple: number | null;
  integer: number | null;
}

interface props {
  url: string;
  submitUrl: string; 
}


const GetQType: React.FC<props> = (props) => {
    const {url,submitUrl}=props;
  const [QType,setQType]:[qType|null,(QType:qType|null)=>void]=useState<qType|null>(null);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");

  useEffect(() => {
    axios
      .get<qType>(url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setQType(response.data)
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
    ) : QType?(
          <ul>
            {QType.single !== null && (
              <GetSCQ
                url={`http://127.0.0.1:8000/questions/singleRetrieve/${QType.single}`}
                submitUrl={submitUrl}
              />
            )}
            {QType.multiple !== null && (
              <GetMCQ
                url={`http://127.0.0.1:8000/questions/multipleRetrieve/${QType.multiple}`}
                submitUrl={submitUrl}
              />
            )}
            {QType.integer !== null && (
              <GetIQ
                url={`http://127.0.0.1:8000/questions/integerRetrieve/${QType.integer}`}
                submitUrl={submitUrl}
              />
            )}
          </ul>
        ):(<p></p>)}
    
  </div>
  );
};
export default GetQType;
