const INITIAL_STATE = {
    activityItem: {
        activity: "0",
        approach: "",
        amount: ""
    },
    dayString: {}
};

const setStateParameter = (state, value, key) => {
    return {
        ...state,
        [key]: value
    }
};

const activityMaintenance = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'OPEN_ADD_MODAL':
            return {
                ...INITIAL_STATE,
                dayString: action.dayString
            };
        case 'OPEN_EDIT_MODAL':
            return {
                ...state,
                activityItem: action.activityItem,
                dayString: action.dayString
            };
        case 'CHANGE_ACTIVITY':
            return {
                ...state,
                activityItem: setStateParameter(state.activityItem, action.activity, "activity")
            };
        case 'CHANGE_APPROACH':
            return {
                ...state,
                activityItem: setStateParameter(state.activityItem, action.approach, "approach")
            };
        case 'CHANGE_AMOUNT':
            return {
                ...state,
                activityItem: setStateParameter(state.activityItem, action.amount, "amount")
            };
        default:
            return state;
    }
};

export default activityMaintenance;
