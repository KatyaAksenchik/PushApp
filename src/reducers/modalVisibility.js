const INITIAL_STATE = {
    addModal: false,
    editModal: false
};

const modalVisibility = (state = {}, action) => {
    switch (action.type) {
        case 'OPEN_ADD_MODAL':
            return {
                ...state,
                addModal: true
            };
        case 'CLOSE_ADD_MODAL':
        case 'ADD_ACTIVITY':
            return {
                ...state,
                addModal: false
            };
        case 'OPEN_EDIT_MODAL':
            return {
                ...state,
                editModal: true
            };
        case 'CLOSE_EDIT_MODAL':
        case 'UPDATE_CALENDAR':
            return{
                ...state,
                editModal: false
            };
        default:
            return state;
    }
};

export default modalVisibility;