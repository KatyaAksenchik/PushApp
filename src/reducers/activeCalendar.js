const checkMonthThisYear = (month, year) => {
    switch (month) {
        case -1:
            return {
                activeMonth: 11,
                activeYear: year--
            };
        case 12:
            return {
                activeMonth: 0,
                activeYear: year++
            };
        default:
            return {
                activeMonth: month,
                activeYear: year
            }
    }
};

const activeMonth = (state = {}, action) => {
    switch (action.type) {
        case 'CHANGE_CALENDAR_MONTH':
            let stateMonth = state.activeMonth,
                stateYear = state.activeYear;

            switch (action.operationType) {
                case "INCREMENT":

                    stateMonth++;
                    return checkMonthThisYear(stateMonth, stateYear);
                case "DECREMENT":

                    stateMonth--;
                    return checkMonthThisYear(stateMonth, stateYear);
            }

            return {};
        case 'CLOSE_MODAL':
            return {
                ...state,
                modal: false
            };
        default:
            return state;
    }
};


/*
 state = {
 activeYear: 10,
 activeMonth: 10
 }
 */


export default activeMonth;