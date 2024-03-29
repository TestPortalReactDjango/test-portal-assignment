import React, { useState, useEffect } from "react";
import axios from "axios";
import GetSCQ from "./getSCQ";
import GetMCQ from "./getMCQ";
import GetIQ from "./getIQ";


interface qType {
  pk: number;
  single: number|null;
  multiple: number|null;
integer: number|null;
}

interface props {
  url: string;
}

const qTypeList:qType[]=[];
const GetQRef:React.FC<props> = (props) => {
  const { url } = props;
  const [qRef, setqRef]: [qType[], (qRef: qType[]) => void] =
    useState(qTypeList);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");

  useEffect(() => {
    axios
      .get<qType[]>(url, {
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
        {qRef.map((QType)=>(<>
        {QType.single!==null}&&<GetSCQ url={""}/>
        {QType.multiple!==null}&&<GetMCQ url={""}/>
        {QType.integer!==null}&&<GetIQ url={""}/></>))}
      </ul>
    )}
  </div>)
};
export default GetQRef;