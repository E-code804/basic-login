import React, { Dispatch, SetStateAction, useState } from "react";

interface LetterSliderProps {
  setName: Dispatch<SetStateAction<string>>;
}

const LetterSlider: React.FC<LetterSliderProps> = ({ setName }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);

  // This function updates the slider value and converts it to a letter
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(event.target.value, 10));
  };

  // This function adds the selected letter to the list if there are less than 6 letters
  const addLetter = () => {
    const selectedLetter = letters[sliderValue];
    if (selectedLetters.length < 6) {
      setSelectedLetters([...selectedLetters, selectedLetter]);
      setName(selectedLetters.join(""));
    }
  };

  // Reset the selected letters
  const resetLetters = () => {
    setSelectedLetters([]);
  };

  return (
    <div>
      <h2>Select a Letter: {letters[sliderValue]}</h2>
      <input
        type="range"
        min="0"
        max={letters.length - 1}
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <br />
      <button onClick={addLetter} disabled={selectedLetters.length >= 6}>
        Add Letter
      </button>
      <button onClick={resetLetters}>Reset</button>
      <p>Selected Letters: {selectedLetters.join("")}</p>
      {selectedLetters.length === 6 && (
        <h3>Final Username: {selectedLetters.join("")}</h3>
      )}
    </div>
  );
};

export default LetterSlider;
