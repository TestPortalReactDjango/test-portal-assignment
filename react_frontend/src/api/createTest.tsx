import React, { useState, useEffect } from "react";
import axios from "axios";

interface Test {
  testname: string;
  numberOfQuestion: Number;
  startTime: Date;
  endTime: Date;
  qRefTable: number;
}

const CreateTest= async (Test:Test): Promise<number> =>{
  const {testname,numberOfQuestion,startTime,endTime,qRefTable}=Test;
  console.log(testname,numberOfQuestion,startTime,endTime,qRefTable)
  try {
    const response = await axios
    .post(
      "http://127.0.0.1:8000/test/testcreate/",
      {testname:testname,
        numberOfQuestion:numberOfQuestion,
        startTime:startTime,
        endTime:endTime,
        qRefTable:qRefTable,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    return response.status as number
    
  } catch (error) {
    return 400
  }
}
 
      
  

export default CreateTest;
