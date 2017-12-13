const INITIAL_STATE = {
    activityItem: {
        activity: "0",
        approach: "",
        amount: ""
    },
    id: null,
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
                dayString: action.dayString,
                id: action.id
            };
        case "CHANGE_ACTIVITY_STATE":
            return {
                ...state,
                activityItem: setStateParameter(state.activityItem, action.value, action.key)
            };
        default:
            return state;
    }
};

export default activityMaintenance;
