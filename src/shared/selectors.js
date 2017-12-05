import {MONTHS_NAME} from "../shared/const";

export const getActivitiesList = ({exercisesTracks}) => {
    return exercisesTracks ? exercisesTracks : [];
};


export const getMonthIndexNumber = ({addActivityModal}) => {
    const month = (new Date(addActivityModal.day)).getMonth();
    return month + 1;
};

export const getDate = ({addActivityModal}) => {
    return (new Date(addActivityModal.day)).getDate();
};

export const getActiveStringDate = ({addActivityModal}) => {
    return addActivityModal.day;
};

export const getModalVisibility = ({addActivityModal}) => {
    return addActivityModal.modal;
};

export const getMonthName = ({calendar}) => {
    const activeMonth = calendar.monthInfo.monthOrder;
    return MONTHS_NAME[activeMonth];
};

export const getYear = ({calendar}) => {
    return calendar.monthInfo.currentYear;
};


export const getMonthOrder = ({monthInfo}) => {
    return monthInfo.monthOrder;
};

export const getCurrentYear = ({monthInfo}) => {
    return monthInfo.currentYear;
};


export const checkIfMonthThisYear = (month, year) => {
    switch (month) {
        case -1:
            return {
                monthOrder: 11,
                currentYear: year - 1
            };
        case 12:
            return {
                monthOrder: 0,
                currentYear: year + 1
            };
        default:
            return {
                monthOrder: month,
                currentYear: year
            }
    }
};

