import React, { createContext, useState, useContext } from "react";

const TestContext = createContext(null);

const TestProvider = ({ children }) => {
  const [selectedTestPk, setSelectedTestPk] = useState();

  const value = { selectedTestPk, setSelectedTestPk };

  return (
    <TestContext.Provider value={value}>{children}</TestContext.Provider>
  );
};

export { TestContext, TestProvider };
