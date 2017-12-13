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


export const httpPostRecord = (item) => {
    let database = getDatabase();
    database.push(item);
    setDatabase(database);
};

export const httpFormRecord = (date, exercise) => {
    const id = getDatabase().length + 1;
    const key = `${date.getMonth()}/${date.getFullYear()}`;

    return {id, date, key, exercise}
};


export const httpUpdateItem = (record, id) => {
    let records = getDatabase();

    records.forEach((item, index) => {
        if (item.id === id) {
            item.exercise = record;
        }
    });

    return records;
};

export const httpDeleteItem = (id) => {
    let records = getDatabase();
    return records.filter((item) => item.id !== id);
};

