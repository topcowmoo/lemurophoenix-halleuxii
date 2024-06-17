// Imports the useState hook from React for managing component state,
// PropTypes for type-checking props, and animate.css for animations.
import { useState } from "react";
import PropTypes from "prop-types";
import 'animate.css';

// Defines the AgeCalculator component, which accepts a `calculateAge` function as a prop.
export const AgeCalculator = ({ calculateAge }) => {
  // Uses the useState hook to manage the date state and animation states.
  // `date` stores the user's input date.
  // `isAnimatingClear` and `isAnimatingCalculate` manage the animation state of buttons.
  const [date, setDate] = useState("");
  const [isAnimatingClear, setIsAnimatingClear] = useState(false);
  const [isAnimatingCalculate, setIsAnimatingCalculate] = useState(false);

  // Handles changes to the date input field by updating the `date` state.
  const handleChangeDate = (val) => {
    setDate(val.target.value);
  };

  // Handles form submission. Prevents the default form submission behavior,
  // triggers the calculateAge function with the current date,
  // and manages the animation for the Calculate Age button.
  const handleSubmit = (val) => {
    val.preventDefault();
    calculateAge(date);
    setIsAnimatingCalculate(true);
    setTimeout(() => {
      setIsAnimatingCalculate(false);
    }, 1000); // Resets the animation state after 1 second.
  };

  // Handles the clear action, resets the date, and manages the animation for the Clear button.
  const handleClear = () => {
    setDate("");
    setIsAnimatingClear(true);
    setTimeout(() => {
      setIsAnimatingClear(false);
    }, 1000); // Resets the animation state after 1 second.
  };

  // Renders the form, which includes a date input, and Calculate Age and Clear buttons.
  // Both buttons have conditional classes for animation based on their respective states.
  return (
    <form onSubmit={handleSubmit} className="flex flex-col mb-4">
      <div className="mb-4 text-center">
        <label htmlFor="inputDob" className="text-gray-700 block">
          Enter your Date of Birth
        </label>
        <input
          id="inputDob"
          value={date}
          type="date"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mt-2"
          onChange={handleChangeDate}
        />
      </div>
      <div className="flex justify-between">
        <button
          disabled={!date}
          type="submit"
          className={`bg-gray-500 text-white font-semibold px-4 py-2 rounded ${
            isAnimatingCalculate ? "animate__animated animate__rubberBand" : ""
          }`}
        >
          Calculate Age
        </button>
        <button
          type="button"
          onClick={handleClear}
          className={`bg-gray-500 text-white font-semibold px-4 py-2 rounded ${
            isAnimatingClear ? "animate__animated animate__rubberBand" : ""
          }`}
        >
          Clear
        </button>
      </div>
    </form>
  );
};

// Defines propTypes for the AgeCalculator component to ensure the `calculateAge`
// prop is a function and is required.
AgeCalculator.propTypes = {
  calculateAge: PropTypes.func.isRequired,
};