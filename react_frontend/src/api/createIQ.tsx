import React, { useState, useEffect } from "react";
import axios from "axios";

interface IQ {
  question: string;
  correctOption: number;
}

const CreateIQ =async (IQ : IQ) : Promise<number>  => {
  const { question, correctOption } = IQ;
  try {
    const response = await axios
      .post(
        "http://127.0.0.1:8000/questions/integer/",
        { question: question, correctOption: correctOption },
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
};

export default CreateIQ;
