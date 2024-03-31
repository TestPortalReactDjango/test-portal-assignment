import React, { useState, useEffect } from "react";
import axios from "axios";

interface props {
  arrqType: number[];
}

interface Response {
  status: number;
  pk: number;
}

const CreateQRef = async (props: props): Promise<Response> => {
  const { arrqType } = props;


  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/questions/qref/",
      {
        q1: arrqType[0]?.toString(),
q2: arrqType[1]?.toString(),
q3: arrqType[2]?.toString(),
q4: arrqType[3]?.toString(),
q5: arrqType[4]?.toString(),
q6: arrqType[5]?.toString(),
q7: arrqType[6]?.toString(),
q8: arrqType[7]?.toString(),
q9: arrqType[8]?.toString(),
q10: arrqType[9]?.toString(),
q11: arrqType[10]?.toString(),
q12: arrqType[11]?.toString(),
q13: arrqType[12]?.toString(),
q14: arrqType[13]?.toString(),
q15: arrqType[14]?.toString(),
q16: arrqType[15]?.toString(),
q17: arrqType[16]?.toString(),
q18: arrqType[17]?.toString(),
q19: arrqType[18]?.toString(),
q20: arrqType[19]?.toString(),
q21: arrqType[20]?.toString(),
q22: arrqType[21]?.toString(),
q23: arrqType[22]?.toString(),
q24: arrqType[23]?.toString(),
q25: arrqType[24]?.toString(),
q26: arrqType[25]?.toString(),
q27: arrqType[26]?.toString(),
q28: arrqType[27]?.toString(),
q29: arrqType[28]?.toString(),
q30: arrqType[29]?.toString()

      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return {
      status: response.status as number,
      pk: response.data.pk,
    };
  } catch (error) {
    return {
      status: 400,
      pk: -1,
    };
  }
};

export default CreateQRef;
