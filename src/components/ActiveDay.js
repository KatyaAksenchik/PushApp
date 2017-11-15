import React from 'react';
import PropTypes from 'prop-types'
// import ActivitiesList from './ActivitiesList'

const ActiveDay = ({dayNumber, onClick}) => (
    <div className="day">
        <button className="add" onClick={onClick}>+</button>
        <p className="number">{dayNumber}</p>
        {/*<ActivitiesList context={context}/>*/}
    </div>
);

ActiveDay.propTypes = {
    dayNumber: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};


export default ActiveDay;