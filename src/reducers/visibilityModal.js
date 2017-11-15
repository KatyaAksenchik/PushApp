export let activeDay = null;

const visibilityModal = (state = false, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            activeDay = action.day;
            return state = true;
        case 'CLOSE_MODAL':
            return state = false;
        default:
            return state;
    }
};

export default visibilityModal;