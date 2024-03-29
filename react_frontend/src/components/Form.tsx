import React, { useState } from "react";

interface props {
  choices: string[];
  label: string;
  onSubmit: (choice: string) => void;
}

const Form: React.FC<props> = (props) => {
  const { choices, label, onSubmit } = props;
  const [selectedChoice, setSelectedChoice] = useState<string>("");

  const handleChoiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedChoice(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(selectedChoice);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label >
        <p className="text-lg font-bold">
        {label}
        </p>
        <select className="mb-3" value={selectedChoice} onChange={handleChoiceChange}>
          {choices.map((choice, index) => (
            <option key={index} value={choice}>
              {choice}
            </option>
          ))}
        </select>
      </label>
      <p></p>
      <button className="bg-blue-500 text-white rounded py-2 px-4 mb-2" type="submit">Submit</button>
    </form>
  );
};

export default Form;
