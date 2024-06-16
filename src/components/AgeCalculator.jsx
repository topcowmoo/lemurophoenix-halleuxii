import { useState } from "react";
import PropTypes from "prop-types";
import 'animate.css';

export const AgeCalculator = ({ calculateAge }) => {
  const [date, setDate] = useState("");
  const [isAnimatingClear, setIsAnimatingClear] = useState(false);
  const [isAnimatingCalculate, setIsAnimatingCalculate] = useState(false);

  const handleChangeDate = (val) => {
    setDate(val.target.value);
  };

  const handleSubmit = (val) => {
    val.preventDefault();
    calculateAge(date);
    setIsAnimatingCalculate(true);
    setTimeout(() => {
      setIsAnimatingCalculate(false);
    }, 1000); // duration of the animation
  };

  const handleClear = () => {
    setDate("");
    setIsAnimatingClear(true);
    setTimeout(() => {
      setIsAnimatingClear(false);
    }, 1000); // duration of the animation
  };

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
          className={`${
            !date ? "bg-blue-300" : "bg-blue-500"
          } text-white font-semibold px-4 py-2 rounded ${
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

AgeCalculator.propTypes = {
  calculateAge: PropTypes.func.isRequired,
};