import React from 'react';
import ActiveDayContainer from '../containers/ActiveDayContainer'
import PropTypes from 'prop-types'


const UnActiveDay = () => (
    <div className="day last-month">
    </div>
);


const Card = ({dayNumber, dayThisMonth, dayString, exercisesTracks}) => {
    if (dayThisMonth) {
        return (
            <ActiveDayContainer dayNumber={dayNumber} dayString={dayString} exercisesTracks={exercisesTracks}/>
        )
    }
    return (
        <UnActiveDay />
    )
};

Card.propTypes = {
    dayNumber: PropTypes.number,
    dayThisMonth: PropTypes.bool,
    // dayString: PropTypes.date,
    exercisesTracks:  PropTypes.array
};

export default Card;

/// DaySrting ошибка
/// Failed prop type: Invalid prop `dayString` of type `date` supplied to `Card`, expected `string`.
/// Если меняешь на date ->
/// Warning: Failed prop type: Card: prop type `dayString` is invalid; it must be a function, usually from the `prop-types` package, but received `undefined`.