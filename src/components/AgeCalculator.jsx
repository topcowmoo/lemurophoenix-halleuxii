import { useState } from "react"
import PropTypes from 'prop-types';
 
export const AgeCalculator = ({ calculateAge }) => {
    const [date, setDate] = useState('');
    console.log(date);
 
    const handleChangeDate = (val) => {
        setDate(val.target.value);
    };
    const handleSubmit = (val) => {
        val.preventDefault();
        calculateAge(date);
    };
 
    return (
        <form onSubmit={handleSubmit}>
            <div className="col-auto">
                <input value={date} type="date"
                    className="mb-3"
                    onChange={handleChangeDate} />
            </div>
            <div className="col-auto">
                <button disabled={!date}
                    type="submit"
                    className="btn btn-primary mb-3">
                    calculate Age
                </button>
            </div>
        </form>
    )
};
AgeCalculator.propTypes = {
    calculateAge: PropTypes.func.isRequired,
}