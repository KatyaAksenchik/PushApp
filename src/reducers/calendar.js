import {loadCalendarTracks,loadActiveMonth} from "./tracks"
import {getMonthOrder, getCurrentYear, checkIfMonthThisYear} from "../shared/selectors"


const INITIAL_STATE = {
    monthInfo: {
        monthOrder: null,
        currentYear: null
    },
    calendarDays : []
};

const initPrevNextMonthInfo = (state, operationType) => {
    let order = getMonthOrder(state),
        year = getCurrentYear(state);

    (operationType === "NEXT")? order++ : order--;

    const data = checkIfMonthThisYear(order, year);

    return {
        monthInfo: data,
        calendarDays: loadCalendarTracks(data)
    }
};

const calendar = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_ACTIVITY":
        case "UPDATE_CALENDAR":
            const activeMonthInfo = state.monthInfo;

            return {
                ...state,
                calendarDays: loadCalendarTracks(activeMonthInfo)
            };
        case "UPDATE_CALENDAR_TO_CURRENT":
            return {
                ...state,
                monthInfo:loadActiveMonth(),
                calendarDays: loadCalendarTracks(loadActiveMonth())
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
