export const getActivitiesList = ({exercisesTracks}) => {
    return exercisesTracks ? exercisesTracks : [];
};


export const getMonthName = ({utils}) => {
    const month = (new Date(utils.day)).getMonth();
    return month + 1;
};

export const getDate = ({utils}) => {
    return (new Date(utils.day)).getDate();
};

export const getModalVisibility = ({utils}) => {
    return utils.modal;
};
