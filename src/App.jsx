// Import the useState hook from React for state management.
import { useState } from "react";
// Import components that are used within this App component.
import { AgeCalculator } from "./components/AgeCalculator";
import { AgeResult } from "./components/AgeResult";
// Import various time calculation utilities from the date-fns library.
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInSeconds,
  differenceInWeeks,
  differenceInYears,
} from "date-fns";

// Define the App component which serves as the root of the age calculation feature.
function App() {
  // Initialize 'age' state as null, which will store the calculated age details.
  const [age, setAge] = useState(null);

  // Define a function to calculate age from a given date.
  const calculateAge = (date) => {
    const today = new Date();  // Get the current date.
    const dateObject = new Date(date);  // Convert the input date from string to Date object.
    // Calculate different measures of age using date-fns utility functions.
    const ageYears = differenceInYears(today, dateObject);
    const ageMonths = differenceInMonths(today, dateObject);
    const ageDays = differenceInDays(today, dateObject);
    const ageWeeks = differenceInWeeks(today, dateObject);
    const ageHours = differenceInHours(today, dateObject);
    const ageMinutes = differenceInMinutes(today, dateObject);
    const ageSeconds = differenceInSeconds(today, dateObject);
    // Update the age state with the calculated values.
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

  // Render the App component UI.
  return (
    <div className="bg-gradient-to-b from-orange-50 to-zinc-300 flex items-center justify-center h-screen">
      <div className="p-8 rounded-lg custom-shadow bg-gradient-to-br from-white via-gray-100 to-gray-200" style={{ backgroundColor: 'white' }}>
        <h1 className="text-3xl font-semibold text-center mb-8 text-black-700">Age Calculator</h1>
        <strong className="block text-lg text-center mb-8">
          This age calculator computes age in terms of years, months, weeks, days, hours, minutes, and seconds, given a date of birth.
        </strong>
        {/* Pass the calculateAge function as a prop to the AgeCalculator component */}
        <AgeCalculator calculateAge={calculateAge} />
        {/* Conditionally render the AgeResult component if the age state is not null */}
        {age && <AgeResult age={age} />}
      </div>
    </div>
  );
}

// Export the App component as the default export of this module.
export default App;