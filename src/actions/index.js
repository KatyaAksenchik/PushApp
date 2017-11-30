export const switchToNextMonth = () => ({
    type: "SWITCH_TO_NEXT_MONTH"
});

export const switchToPrevMonth = () => ({
    type: "SWITCH_TO_PREV_MONTH"
});

export const openModalWindow = (dayString) => ({
    type: "OPEN_MODAL",
    day: dayString
});

export const closeModalWindow = () => ({
    type: "CLOSE_MODAL"
});

export const addActivity = ({activity, approach, amount}) => ({
    type: "ADD_CALENDAR_DAY",
    activity,
    approach,
    amount
});