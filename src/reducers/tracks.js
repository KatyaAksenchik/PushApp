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
        const index = new Date(item.date).getDate() - 1;

        if (!occupiedDays[index]) {
            occupiedDays[index] = {
                "dayThisMonth": true,
                "exercisesTracks": [{
                    id: item.id,
                    exercises: item.exercise
                }]
            };
        } else {
            occupiedDays[index].exercisesTracks.push({
                id: item.id,
                exercises: item.exercise
            })
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

const complementVisibleDays = (days, number) => {
    const length = days.length;

    if (days.length < number) {
        days.length = number;
        days.fill({"dayThisMonth": false}, length, number)
    }

    return days;
};

const initVisibleDays = (beginningOfMonth, numberOfWeekDay, daysInMonth) => {
    if ((numberOfWeekDay === 6 && daysInMonth > 29) || (numberOfWeekDay === 5 && daysInMonth > 30)) {
        return complementVisibleDays(beginningOfMonth, 42);
    }
    return complementVisibleDays(beginningOfMonth, 35);

};

const getTodayDay = (days) => {
    days.forEach((item, i) => {
        const curr = new Date(item.dayString);
        const today = new Date();

        (curr.getDate() === today.getDate() && curr.getMonth() === today.getMonth()
            && curr.getFullYear() === today.getFullYear()) ? item.today = true : item.today = false;

    });

    return days;
};

export const loadCalendarTracks = ({monthOrder, currentYear}) => {
    const firstDayOfMonth = new Date(currentYear, monthOrder, 1);

    let numberOfWeek = firstDayOfMonth.getDay() - 1;
    if (numberOfWeek === -1) {
        numberOfWeek = 6;
    }

    const daysInMonth = (new Date(currentYear, monthOrder + 1, 0)).getDate();
    const monthDays = {
        currentYear,
        monthOrder,
        daysInMonth
    };

    let dayPrevMonth = initDaysOfPrevMonth(numberOfWeek);
    let daysThisMonth = initDaysOfCurrentMonth(monthDays);
    let daysWithToday = getTodayDay(dayPrevMonth.concat(daysThisMonth));

    return initVisibleDays(daysWithToday, numberOfWeek, daysInMonth);
};


export const loadActiveMonth = () => {
    let today = new Date();
    return {
        monthOrder: today.getMonth(),
        currentYear: today.getFullYear(),
    }
};