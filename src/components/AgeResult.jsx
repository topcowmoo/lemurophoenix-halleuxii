import PropTypes from 'prop-types';
export const AgeResult = ({ age }) => {
    return <>
        <h5>You are age is {age.years} Years</h5>
        <h5>Or {age.months} Months</h5>
        <h5>Or {age.weeks} Weeks</h5>
        <h5>Or {age.days} Days</h5>
        <h5>Or {age.hours} Hours</h5>
        <h5>Or {age.minutes} Minutes</h5>
        <h5>Or {age.seconds} Seconds</h5>
    </>
};
 
AgeResult.prototypes = {
    age: PropTypes.shape({
        years: PropTypes.number.isRequired,
        months: PropTypes.number.isRequired,
        weeks: PropTypes.number.isRequired,
        days: PropTypes.number.isRequired,
        hours: PropTypes.number.isRequired,
        minutes: PropTypes.number.isRequired,
        seconds: PropTypes.number.isRequired,
    }),
};
