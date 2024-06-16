import PropTypes from 'prop-types';

export const AgeResult = ({ age }) => {
  return (
    <div className="text-center mt-4">
      <h5 className="text-lg font-medium">You are {age.years} Years</h5>
      <h5 className="text-lg font-medium">Or {age.months} Months</h5>
      <h5 className="text-lg font-medium">Or {age.weeks} Weeks</h5>
      <h5 className="text-lg font-medium">Or {age.days} Days</h5>
      <h5 className="text-lg font-medium">Or {age.hours} Hours</h5>
      <h5 className="text-lg font-medium">Or {age.minutes} Minutes</h5>
      <h5 className="text-lg font-medium">Or {age.seconds} Seconds</h5>
    </div>
  );
};

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