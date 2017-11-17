import React from 'react'

const CalendarHeaderView = ({monthName, prevBtnClick, nextBtnClick}) => (
    <div className="calendar-header">
        <div className="month">
            <h2 className="title">{monthName}</h2>
            <button className="month-btn prev-month" onClick={prevBtnClick}>Назад</button>
            <button className="month-btn next-month" onClick={nextBtnClick}>Вперед</button>
        </div>
        <div className="week-days">
            <p>Понедельник</p>
            <p>Вторник</p>
            <p>Среда</p>
            <p>Четверг</p>
            <p>Пятница</p>
            <p>Суббота</p>
            <p>Воскресенье</p>
        </div>
    </div>
);

export default CalendarHeaderView;