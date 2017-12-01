import {httpGetRecords} from "../shared/http"

const initDaysOfPrevMonth = (numberOfWeek) => {
    let calendarDaysStart = [];

    if (numberOfWeek !== 0) {
        calendarDaysStart.length = numberOfWeek;
        calendarDaysStart.fill({"dayThisMonth": false}, 0, numberOfWeek);
    }

    return calendarDaysStart;
};


const initOccupiedDays = (year, month) => {
    let records = httpGetRecords(month, year);
    let occupiedDays = [];

    records.forEach((item) => {
        const index = new Date(item.date).getDate();

        if (!occupiedDays[index]) {
            occupiedDays[index] = {
                "dayThisMonth": true,
                "exercisesTracks": [item.exercise]
            };
        } else {
            occupiedDays[index].exercisesTracks.push(item.exercise)
        }
    });
    return occupiedDays;
};

const initDaysOfCurrentMonth = ({currentYear, monthOrder, daysInMonth}) => {
    let filledDays = initOccupiedDays(currentYear, monthOrder);

    for (let i = 0; i <= daysInMonth - 1; i++) {
        let dayString = new Date(currentYear, monthOrder, i + 1);

        if (!filledDays[i]) {
            filledDays[i] = {
                dayThisMonth: true,
                dayNumber: i + 1,
                dayString: dayString,
                exercisesTracks: []
            };
        } else {
            filledDays[i] = {
                ...filledDays[i],
                dayNumber: i + 1,
                dayString: dayString,
            }
        }
    }
    return filledDays;
};

const initVisibleDays = (beginningOfMonth) => {
    const length = beginningOfMonth.length;
    if (beginningOfMonth.length < 35) {
        beginningOfMonth.length = 35;
        beginningOfMonth.fill({"dayThisMonth": false}, length, 35);
    }

    return beginningOfMonth;
};

export const loadCalendarTracks = ({monthOrder, currentYear}) => {
    const firstDayOfMonth = new Date(currentYear, monthOrder, 1);

    let numberOfWeek = firstDayOfMonth.getDay() - 1;
    if (numberOfWeek === -1) {
        numberOfWeek = 6;
    }

    const daysInMonth = (new Date(currentYear, monthOrder + 1, 0)).getDate();
    const monthDays = {currentYear, monthOrder, daysInMonth};

    let dayPrevMonth = initDaysOfPrevMonth(numberOfWeek);
    let daysThisMonth = initDaysOfCurrentMonth(monthDays);

    return initVisibleDays(dayPrevMonth.concat(daysThisMonth));
};


let today = new Date();

export const loadActiveMonth = () => {
    return {
        monthOrder: today.getMonth(),
        currentYear: today.getFullYear(),
    }
};