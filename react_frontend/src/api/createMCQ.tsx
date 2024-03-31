import React, { useState, useEffect } from "react";
import axios from "axios";
import { query } from "express";

interface MCQ {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctOptions: string;
}

const CreateMCQ= async (MCQ:MCQ):Promise<number>=> {
  const { question, option1, option2, option3, option4, correctOptions } = MCQ;
  try {
    const response = await axios
      .post(
        "http://127.0.0.1:8000/questions/multiple/",
        {
          question: question,
          option1: option1,
          option2: option2,
          option3: option3,
          option4: option4,
          correctOptions: correctOptions,
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
};

export default CreateMCQ;
