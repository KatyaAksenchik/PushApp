import {httpGetRecords} from "../shared/http"

const initDaysOfPrevMonth = (numberOfWeek) => {
    let caledarDaysStart = [];

    if (numberOfWeek !== 0) {
        caledarDaysStart.length = numberOfWeek;
        caledarDaysStart.fill({"dayThisMonth": false}, 0, numberOfWeek);
    }

    return caledarDaysStart;
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

const initDaysOfCurrentMonth = ({currentYear, currentMonth, daysInMonth}) => {
    let filledDays = initOccupiedDays(currentYear, currentMonth);

    for (let i = 0; i <= daysInMonth - 1; i++) {
        let dayString = new Date(currentYear, currentMonth, i + 1);

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

export const loadCalendarTracks = (currentMonth = (new Date()).getMonth(), currentYear = (new Date()).getFullYear()) => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);

    let numberOfWeek = firstDayOfMonth.getDay() - 1;
    if (numberOfWeek === -1) {
        numberOfWeek = 6;
    }

    const daysInMonth = (new Date(currentYear, currentMonth + 1, 0)).getDate();
    const monthDays = {currentYear, currentMonth, daysInMonth};

    let dayPrevMonth = initDaysOfPrevMonth(numberOfWeek);
    let daysThisMonth = initDaysOfCurrentMonth(monthDays);

    return initVisibleDays(dayPrevMonth.concat(daysThisMonth));
};


let today = new Date();

export const loadActiveMonth = () => {
    return {
        activeMonth: today.getMonth(),
        activeYear: today.getFullYear(),
    }
};