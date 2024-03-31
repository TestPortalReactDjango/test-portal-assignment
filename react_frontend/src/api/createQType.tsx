import React, { useState, useEffect } from "react";
import axios from "axios";

interface QType {
  single: number | null;
  multiple: number | null;
  integer: number | null;
}
interface Response{
  status :number,
  pk:number,
}

const CreateQType = async (QType: QType): Promise<Response> => {
  const { single, multiple, integer } = QType;
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/questions/qtype/",
      { single: single, multiple: multiple, integer: integer },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return {
      status:response.status as number,
      pk:response.data.pk,
    }
  } catch (error) {
    return {
      status:400,
      pk:-1,
    }
  }
};


export default CreateQType;
