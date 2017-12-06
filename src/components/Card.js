import React from 'react';
import PropTypes from 'prop-types'

import ActiveDayContainer from '../containers/ActiveDayContainer'


const UnActiveDay = () => (
    <div className="day last-month">
    </div>
);

const Card = ({dayThisMonth, dayNumber, dayString, exercisesTracks, today}) => {
    if (dayThisMonth) {
        return (
            <ActiveDayContainer
                dayNumber = {dayNumber}
                dayString = {dayString}
                exercisesTracks = {exercisesTracks}
                today = {today}
            />
        )
    }
    return (
        <UnActiveDay />
    )
};

Card.propTypes = {
    dayNumber: PropTypes.number,
    dayThisMonth: PropTypes.bool,
    dayString: PropTypes.object,
    exercisesTracks:  PropTypes.array
};

export default Card;
