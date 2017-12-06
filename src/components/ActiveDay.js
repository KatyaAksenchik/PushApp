import React from 'react';
import PropTypes from 'prop-types'

import ActivitiesList from './ActivitiesList'


const ActiveDay = ({dayNumber, today, onClick, exercisesTracks}) => (
    <div className={`day ${today ? 'today' : ''}`}>
        <button className="add" onClick={onClick}>+</button>
        <p className="number">
            {dayNumber}
        </p>
        <ActivitiesList exercisesTracks={exercisesTracks}/>
    </div>
);

ActiveDay.propTypes = {
    dayNumber: PropTypes.number,
    onClick: PropTypes.func,
    exercisesTracks: PropTypes.array
};

export default ActiveDay;
