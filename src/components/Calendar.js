import React from 'react';

import CalendarHeader from "../containers/CalendarHeader"
import CalendarBody from "../containers/CalendarBody"

const Calendar = () => (
    <div className="calendar">
        <CalendarHeader/>
        <CalendarBody/>
    </div>
);

export default Calendar;