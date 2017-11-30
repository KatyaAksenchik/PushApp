
export const changeMonth = (month, year, operationType, activeMonth) => ({
    type: "CHANGE_CALENDAR_MONTH",
    month,
    year,
    operationType,
    activeMonth
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