export const switchToNextMonth = () => ({
    type: "SWITCH_TO_NEXT_MONTH"
});

export const switchToPrevMonth = () => ({
    type: "SWITCH_TO_PREV_MONTH"
});

export const openAddModal = (dayString) => ({
    type: "OPEN_ADD_MODAL",
    dayString
});

export const closeAddModal = () => ({
    type: "CLOSE_ADD_MODAL"
});

export const openEditModal = (id, activityItem) => ({
    type: "OPEN_EDIT_MODAL",
    activityItem
});

export const closeEditModal = () => ({
    type: "CLOSE_EDIT_MODAL"
});

export const addActivity = () => ({
    type: "ADD_ACTIVITY"
});

export const updateCalendarToCurrentMonth = () => ({
    type: "UPDATE_CALENDAR_TO_CURRENT"
});

export const changeActivity = (activity) => ({
    type: "CHANGE_ACTIVITY",
    activity
});

export const changeAmount = (amount) => ({
    type: "CHANGE_AMOUNT",
    amount
});

export const changeApproach = (approach) => ({
    type: "CHANGE_APPROACH",
    approach
});
