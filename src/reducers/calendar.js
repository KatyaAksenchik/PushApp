import {loadCalendarTracks} from './tracks';
// import {activeDay} from "./visibilityModal"

const calendarDay = (state, action) => {
    switch (action.type) {
        case "ADD_CALENDAR_DAY":
            console.log(action);
            // console.log(action.activity, action.approach, action.amount);
            return state;
        // const actionDay = new Date(state.dayString);
        //
        // if (new Date(activeDay).getDate() === actionDay.getDate() && new Date(activeDay).getMonth() === actionDay.getMonth()) {
        //     return {
        //         ...state,
        //         context: [...state.context, {
        //             activity: action.activity,
        //             approach: action.approach,
        //             amount: action.amount
        //         }]
        //     }
        // } else {
        //     return state;
        // }
        default:
            return state;
    }
};

const calendar = (state = [], action) => {
    switch (action.type) {
        case "CHANGE_CALENDAR_MONTH":
            return loadCalendarTracks(action.month, action.year);
        case "ADD_CALENDAR_DAY":
            // return state.map((c) =>
            //     calendarDay(c, action)
            // );

            return state;
        default:
            return state;
    }
};

export default calendar;