import React from 'react';
import ActiveDayContainer from '../containers/ActiveDayContainer'

const UnActiveDay = () => (
    <div className="day last-month">
    </div>
);


const Card = ({dayNumber, dayThisMonth, dayString, context}) => {
    if (dayThisMonth) {
        return (
            <ActiveDayContainer dayNumber={dayNumber} dayString={dayString} context={context}/>
        )
    }
    return (
        <UnActiveDay />
    )
};

export default Card;