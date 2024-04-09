import React, { useState } from "react";

interface props {
  choices: string[];
  label: string;
  submitAction: (selectedChoice: string | number) => void; // Allow number for integer input
  isMultipleChoice?: boolean; // Optional prop for MCQ
}

const Form: React.FC<props> = (props) => {
  const { choices, label, submitAction, isMultipleChoice = false } = props;
  const [selectedChoice, setSelectedChoice] = useState<string | number>(""); // Allow number for integer input

  const handleChoiceChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (props.isMultipleChoice && event.target instanceof HTMLInputElement) {
      const checked = event.target.checked;
      const value = event.target.value;
      // ... handle checkbox logic (checked and value)
    } else {
      const value = event.target.value;
      // Handle other input types (e.g., dropdown selection)
    }
  };
  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitAction(selectedChoice);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <p className="text-lg font-bold">{label}</p>
          {isMultipleChoice ? (
            <div className="mb-3">
              {choices.map((choice, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    value={choice}
                    onChange={handleChoiceChange}
                  />{" "}
                  {choice}
                </label>
              ))}
            </div>
          ) : (
            <select className="mb-3" value={selectedChoice} onChange={handleChoiceChange}>
              <option value="">--</option>
              {choices.map((choice, index) => (
                <option key={index} value={choice}>
                  {choice}
                </option>
              ))}
            </select>
          )}
        </label>
        <p></p>
        <button type="submit" className="bg-blue-500 text-white rounded py-2 px-4 mb-2">
          Submit Answer
        </button>
      </form>
    </>
  );
};

export default Form;
