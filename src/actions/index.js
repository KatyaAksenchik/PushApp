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

export const openEditModal = (id, activityItem, dayString) => ({
    type: "OPEN_EDIT_MODAL",
    activityItem,
    id,
    dayString
});

export const closeEditModal = () => ({
    type: "CLOSE_EDIT_MODAL"
});

export const addActivity = () => ({
    type: "ADD_ACTIVITY"
});

export const updateCalendar = () => ({
    type: "UPDATE_CALENDAR"
});

export const updateCalendarToCurrentMonth = () => ({
    type: "UPDATE_CALENDAR_TO_CURRENT"
});

export const chaneActivityState = (value, key) => ({
    type: "CHANGE_ACTIVITY_STATE",
    value,
    key
});
