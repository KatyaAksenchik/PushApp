export const setDatabase = (data) => {
    localStorage.setItem("database", JSON.stringify(data));
};

export const getDatabase = () => {
    let response = JSON.parse(localStorage.getItem("database"));
    if (!response) {
        return [];
    }
    return response;
};

export const groupDataByMonth = (data, prop = "key") => {
    return data.reduce((groups, item) => {
        let val = item[prop];

        groups[val] = groups[val] || [];
        groups[val].push(item);

        return groups;
    }, {});
};

export const httpGetRecords = (month, year) => {
    let allRecords = groupDataByMonth(getDatabase());
    if (!allRecords[`${month}/${year}`]) {
        return [];
    }
    return allRecords[`${month}/${year}`];
};
