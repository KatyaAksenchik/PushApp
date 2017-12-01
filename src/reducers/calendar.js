import {loadCalendarTracks} from './tracks';
import {getMonthOrder, getCurrentYear, checkIfMonthThisYear} from "../shared/getFromState"

const initPrevNextMonthInfo = (state, operationType) => {
    let order = getMonthOrder(state),
        year = getCurrentYear(state);

    // order = (operationType === "NEXT") ? order++ : order--;
    // Почему так не сработало??

    if (operationType === "NEXT") {
        order++
    }
    else {
        order--
    }

    const data = checkIfMonthThisYear(order, year);

    return {
        monthInfo: data,
        calendarDays: loadCalendarTracks(data)
    }
};


const calendar = (state = {}, action) => {
    switch (action.type) {
        case "ADD_ACTIVITY":
            const currMonthInfo = state.monthInfo;
            return {
                ...state,
                calendarDays: loadCalendarTracks(currMonthInfo)
            };
        case "SWITCH_TO_NEXT_MONTH":
            return initPrevNextMonthInfo(state, "NEXT");
        case "SWITCH_TO_PREV_MONTH":
            return initPrevNextMonthInfo(state, "PREV");

        default:
            return state;
    }
};

export default calendar;


/*
 state = {
 monthInfo: {
 monthOrder: 10,
 currentYear: 2017
 }
 calendarDays : []
 }
 */
