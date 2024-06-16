import { useState } from "react";
import { AgeCalculator } from "./components/AgeCalculator";
import { AgeResult } from "./components/AgeResult";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInSeconds,
  differenceInWeeks,
  differenceInYears,
} from "date-fns";

function App() {
  const [age, setAge] = useState(null);

  const calculateAge = (date) => {
    const today = new Date();
    const dateObject = new Date(date);
    const ageYears = differenceInYears(today, dateObject);
    const ageMonths = differenceInMonths(today, dateObject);
    const ageDays = differenceInDays(today, dateObject);
    const ageWeeks = differenceInWeeks(today, dateObject);
    const ageHours = differenceInHours(today, dateObject);
    const ageMinutes = differenceInMinutes(today, dateObject);
    const ageSeconds = differenceInSeconds(today, dateObject);
    setAge({
      years: ageYears,
      months: ageMonths,
      days: ageDays,
      weeks: ageWeeks,
      hours: ageHours,
      minutes: ageMinutes,
      seconds: ageSeconds,
    });
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="border border-green-500 p-8 rounded-lg shadow-md" style={{ backgroundColor: 'white' }}>
        <h1 className="text-3xl font-semibold text-center mb-8 text-green-700">Age Calculator</h1>
        <strong className="block text-lg text-center mb-8">
          This free age calculator computes age in terms of years, months, weeks, days, hours, minutes, and seconds, given a date of birth.
        </strong>
        <AgeCalculator calculateAge={calculateAge} />
        {age && <AgeResult age={age} />}
      </div>
    </div>
  );
}

export default App;