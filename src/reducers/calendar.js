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



// const calendarDay = (state, action) => {
//     switch (action.type) {
//         case "ADD_CALENDAR_DAY":
//             console.log(action);
//             // console.log(action.activity, action.approach, action.amount);
//             return state;
//         // const actionDay = new Date(state.dayString);
//         //
//         // if (new Date(activeDay).getDate() === actionDay.getDate() && new Date(activeDay).getMonth() === actionDay.getMonth()) {
//         //     return {
//         //         ...state,
//         //         context: [...state.context, {
//         //             activity: action.activity,
//         //             approach: action.approach,
//         //             amount: action.amount
//         //         }]
//         //     }
//         // } else {
//         //     return state;
//         // }
//         default:
//             return state;
//     }
// };
