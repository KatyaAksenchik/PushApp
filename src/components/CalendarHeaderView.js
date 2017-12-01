import React from 'react'
import PropTypes from 'prop-types'


const CalendarHeaderView = ({monthName, year, prevBtnClick, nextBtnClick,currentBtnClick}) => (
    <div className="calendar-header">
        <div className="month">
            <div>
                <button className="month-btn" onClick={prevBtnClick}>Назад</button>
            </div>
            <div className="center-block">
                <button className="month-btn curr-month" onClick={currentBtnClick}>Текущий месяц</button>
            </div>
            <div>
                <h2 className="title">{monthName} {year}</h2>
            </div>
            <div className="margin-left-auto">
                <button className="month-btn" onClick={nextBtnClick}>Вперед</button>
            </div>
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

CalendarHeaderView.propTypes = {
    monthName: PropTypes.string,
    prevBtnClick: PropTypes.func,
    nextBtnClick: PropTypes.func,
};

export default CalendarHeaderView;