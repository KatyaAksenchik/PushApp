const utils = (state = {}, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {
                ...state,
                day: action.day,
                modal: true
            };
        case 'CLOSE_MODAL':
            return {
                ...state,
                modal: false
            };
        default:
            return state;
    }
};

export default utils;
