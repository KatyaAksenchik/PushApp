import {MONTHS_NAME} from "../shared/const";


export const getActivitiesList = ({exercisesTracks}) => {
    return exercisesTracks ? exercisesTracks : [];
};


export const getMonthIndexNumber = ({utils}) => {
    const month = (new Date(utils.day)).getMonth();
    return month + 1;
};

export const getDate = ({utils}) => {
    return (new Date(utils.day)).getDate();
};

export const getModalVisibility = ({utils}) => {
    return utils.modal;
};


export const getMonthName = ({activeMonth}) => {
    return MONTHS_NAME[activeMonth.activeMonth]
};