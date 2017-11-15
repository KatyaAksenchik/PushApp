import React from 'react';
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


export default CalendarDaysList;