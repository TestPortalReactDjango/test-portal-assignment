import React, { useState } from "react";

interface Props {
  choices: string[];
  label: string;
  submitAction: (choice: string) => void;
}

const Form: React.FC<Props> = ({ choices, label, submitAction }) => {
  const [selectedChoice, setSelectedChoice] = useState<string>("");

  const handleChoiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedChoice(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitAction(selectedChoice);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p className="text-lg font-bold">{label}</p>
        <select className="mb-3" value={selectedChoice} onChange={handleChoiceChange}>
          <option value="--"></option>
          {choices.map((choice, index) => (
            <option key={index} value={choice}>
              {choice}
            </option>
          ))}
        </select>
      </label>
      <p></p>
      <button type="submit" className="bg-blue-500 text-white rounded py-2 px-4 mb-2">
        Submit
      </button>
    </form>
  );
};

export default Form;
