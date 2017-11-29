import React from 'react';
import Card from "./Card";
import PropTypes from 'prop-types'


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