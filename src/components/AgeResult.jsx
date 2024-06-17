import PropTypes from 'prop-types';

// Defines the AgeResult component which displays various age measurements.
// Accepts a prop `age`, which is an object containing time units like years, months, etc.
export const AgeResult = ({ age }) => {
  // Renders a div that centrally aligns text and adds margin at the top.
  return (
    <div className="text-center mt-4">
      {/* Display the number of years */}
      <h5 className="text-lg font-medium">You are {age.years} Years</h5>
      {/* Display the number of months */}
      <h5 className="text-lg font-medium">Or {age.months} Months</h5>
      {/* Display the number of weeks */}
      <h5 className="text-lg font-medium">Or {age.weeks} Weeks</h5>
      {/* Display the number of days */}
      <h5 className="text-lg font-medium">Or {age.days} Days</h5>
      {/* Display the number of hours */}
      <h5 className="text-lg font-medium">Or {age.hours} Hours</h5>
      {/* Display the number of minutes */}
      <h5 className="text-lg font-medium">Or {age.minutes} Minutes</h5>
      {/* Display the number of seconds */}
      <h5 className="text-lg font-medium">Or {age.seconds} Seconds</h5>
    </div>
  );
};

// Specifies the shape and required nature of the `age` prop using PropTypes.
// This validation helps ensure each component receives the correct data types.
AgeResult.propTypes = {
  age: PropTypes.shape({
    years: PropTypes.number.isRequired,
    months: PropTypes.number.isRequired,
    weeks: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    hours: PropTypes.number.isRequired,
    minutes: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired,
  }).isRequired,
};