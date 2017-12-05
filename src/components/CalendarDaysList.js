import React from 'react';
import PropTypes from 'prop-types'

import Card from "./Card";


const CalendarDaysList = ({calendar}) => (
    <div className="calendar-body">
        {
            calendar.map((day, i) =>
                <Card key={i} {...day}/>
            )
        }
    </div>
);

CalendarDaysList.propTypes = {
    calendar:  PropTypes.array
};


export default CalendarDaysList;
