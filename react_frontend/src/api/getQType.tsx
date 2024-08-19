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
}


const GetQType: React.FC<props> = (props) => {
    const {url}=props;
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
                submitUrl="http://127.0.0.1:8000/test/result/"
              />
            )}
            {QType.multiple !== null && (
              <GetMCQ
                url={`http://127.0.0.1:8000/questions/multipleRetrieve/${QType.multiple}`}
                submitUrl="http://127.0.0.1:8000/test/result/"
              />
            )}
            {QType.integer !== null && (
              <GetIQ
                url={`http://127.0.0.1:8000/questions/integerRetrieve/${QType.integer}`}
                submitUrl="http://127.0.0.1:8000/test/result/"
              />
            )}
          </ul>
        ):(<p></p>)}
    
  </div>
  );
};
export default GetQType;