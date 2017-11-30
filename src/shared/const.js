export const ACTIVITIES_TYPES_LIST = [{
        id: 1,
        name: "Отжимания"
    }, {
        id: 2,
        name: "Прыжки"
    }, {
        id: 3,
        name: "Бег"
    }, {
        id: 4,
        name: "Приседание"
    }]
;


export const MONTHS_NAME = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

export let today = {
    monthOrder: (new Date()).getMonth(),
    currentYear: (new Date()).getFullYear()
};