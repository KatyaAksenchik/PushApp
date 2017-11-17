import React from 'react';
import PropTypes from 'prop-types'
import ActivitiesList from './ActivitiesList'

const ActiveDay = ({dayNumber, onClick, context}) => (
    <div className="day">
        <button className="add" onClick={onClick}>+</button>
        <p className="number">{dayNumber}</p>
        <ActivitiesList context={context}/>
    </div>
);

ActiveDay.propTypes = {
    dayNumber: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    context: PropTypes.arrayOf(PropTypes.shape({
        activity: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        approach: PropTypes.number.isRequired
    }).isRequired).isRequired
};

export default ActiveDay;