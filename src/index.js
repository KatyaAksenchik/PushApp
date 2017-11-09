import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom'
import {combineReducers} from 'redux';
import {createStore} from 'redux';

//styles
import './assets/css/styles.css'
import registerServiceWorker from './registerServiceWorker';


const setDatabase = (data) => {
    localStorage.setItem("database", JSON.stringify(data));
};

const getDatabase = () => {
    return JSON.parse(localStorage.getItem("database"));
};

console.log(getDatabase());

const groupDataByMonth = (data, prop = "key") => {
    return data.reduce((groups, item) => {
        let val = item[prop];

        groups[val] = groups[val] || [];
        groups[val].push(item);

        return groups;
    }, {});
};

const httpGetRecords = (month, year) => {
    let allRecords = groupDataByMonth(getDatabase());
    if (!allRecords[`${month}/${year}`]) {
        return [];
    }

    return allRecords[`${month}/${year}`];
};


let activitiesTypesList = [{
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

let activeDay = null;

const visibilityModal = (state = false, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            activeDay = action.day;
            return state = true;
        case 'CLOSE_MODAL':
            return state = false;
        default:
            return state;
    }
};


let initDaysOfPrevMonth = (numberOfWeek) => {
    let caledarDaysStart = [];

    if (numberOfWeek !== 0) {
        caledarDaysStart.length = numberOfWeek;
        caledarDaysStart.fill({"dayThisMonth": false}, 0, numberOfWeek);
    }

    return caledarDaysStart;
};


const initOccupiedDays = (year, month) => {
    let records = httpGetRecords(month, year);
    console.log(records);
    let occupiedDays = [];

    records.forEach((item) => {
        const index = new Date(item.date).getDate();

        if (!occupiedDays[index]) {
            occupiedDays[index] = {
                "dayThisMonth": true,
                "context": [item.exercise]
            };
        } else {
            occupiedDays[index].context.push(item.exercise)
        }
    });
    return occupiedDays;
};

let initDaysOfCurrentMonth = ({currentYear, currentMonth, daysInMonth}) => {
    let filledDays = initOccupiedDays(currentYear, currentMonth);

    for (let i = 0; i <= daysInMonth-1; i++) {
        let dayString = new Date(currentYear, currentMonth, i + 1);

        if (!filledDays[i]) {
            filledDays[i] = {
                dayThisMonth: true,
                dayNumber: i + 1,
                dayString: dayString,
                context: []
            };
        } else {
            filledDays[i] = {
                ...filledDays[i],
                dayNumber: i + 1,
                dayString: dayString,
            }
        }
    }
    return filledDays;
};

let initVisibleDays = (beginningOfMonth) => {
    const length = beginningOfMonth.length;
    if (beginningOfMonth.length < 35) {
        beginningOfMonth.length = 35;
        beginningOfMonth.fill({"dayThisMonth": false}, length, 35);
    }

    return beginningOfMonth;
};

let loadCalendarTracks = (currentMonth = (new Date()).getMonth(), currentYear = (new Date()).getFullYear()) => {
    console.log("Curr", currentYear, currentMonth);
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);

    let numberOfWeek = firstDayOfMonth.getDay() - 1;
    if (numberOfWeek === -1) {
        numberOfWeek = 6;
    }

    const daysInMonth = (new Date(currentYear, currentMonth + 1, 0)).getDate();
    const monthDays = {currentYear, currentMonth, daysInMonth};

    let dayPrevMonth = initDaysOfPrevMonth(numberOfWeek);
    let daysThisMonth = initDaysOfCurrentMonth(monthDays);

    return initVisibleDays(dayPrevMonth.concat(daysThisMonth));
};

const calendarDay = (state, action) => {
    switch (action.type) {
        case "ADD_CALENDAR_DAY":
            const actionDay = new Date(state.dayString);

            if (new Date(activeDay).getDate() === actionDay.getDate() && new Date(activeDay).getMonth() === actionDay.getMonth()) {
                return {
                    ...state,
                    context: [...state.context, {
                        activity: action.activity,
                        approach: action.approach,
                        amount: action.amount
                    }]
                }
            } else {
                console.log(state);
                return state;
            }
        default:
            return state;
    }
};

const calendar = (state = [], action) => {
    switch (action.type) {
        case "CHANGE_CALENDAR_MONTH":
            return loadCalendarTracks(action.month, action.year);
        case "ADD_CALENDAR_DAY":
            return state.map((c) =>
                calendarDay(c, action)
            );
        default:
            return state;
    }
};


let initCalendarState = () => {
    return {calendar: loadCalendarTracks()}
};

const pushApp = combineReducers({calendar, visibilityModal});
const store = createStore(pushApp, initCalendarState());
// store.dispatch(loadCalendarTracks());

const ActivityItem = ({activity, approach, amount}) => {
    return (
        <li className="activity-item">
            <p className="name">
                {activity}
            </p>
            <p className="amount">
                {approach}x {amount}
            </p>
        </li>
    )
};

const ActivitiesList = ({context}) => {
    return (
        <ul className="activities-list">
            {
                context.map((item, i) =>
                    <ActivityItem key={i} {...item}/>
                )
            }
        </ul>
    )
};

const Card = ({dayNumber, dayThisMonth, dayString, context}) => {
    let activitiesContent = null;

    if (dayThisMonth && context.length > 0) {
        activitiesContent = <ActivitiesList context={context}/>
    }

    if (dayThisMonth) {
        return (
            <div className="day">
                <button className="add" onClick={() => {
                    store.dispatch({
                        type: "OPEN_MODAL",
                        day: dayString
                    })
                }}>+
                </button>
                <p className="number">{dayNumber}</p>
                {activitiesContent}
            </div>
        )
    } else {
        return (
            <div className="day last-month">
            </div>
        )
    }
};

let monthsName = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let currMonth = 10;

const CalenderHeader = () => (
    <div className="calendar-header">
        <div className="month">
            <h2 className="title">{monthsName[currMonth]}</h2>
            <button className="month-btn prev-month" onClick={() => {
                currMonth--;
                store.dispatch({
                    type: "CHANGE_CALENDAR_MONTH",
                    month: currMonth,
                    year: 2017
                })
            }}>
                Назад
            </button>
            <button className="month-btn next-month" onClick={() => {
                currMonth++;
                store.dispatch({
                    type: "CHANGE_CALENDAR_MONTH",
                    month: currMonth,
                    year: 2017
                })
            }}>
                Вперед
            </button>
        </div>
        <div className="week-days">
            <p>Понедельник</p>
            <p>Вторник</p>
            <p>Среда</p>
            <p>Четверг</p>
            <p>Пятница</p>
            <p>Суббота</p>
            <p>Воскресенье</p>
        </div>
    </div>
);

const CalendarBody = ({calendar, onDayClick}) => (
    <div className="calendar-body">
        {
            calendar.map((day, i) =>
                <Card key={i} {...day}/>
            )
        }
    </div>
);


class Calendar extends Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const props = this.props;
        const state = store.getState();

        return (
            <div className="calendar">
                {/*<button onClick={() => console.log(state.calendar)}>Show state</button>*/}
                <CalenderHeader/>
                <CalendarBody calendar={state.calendar}/>
            </div>
        )
    }
}


class ModalAdd extends Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const props = this.props;
        const state = store.getState();

        let activity, amount, approach;
        return (
            <div className="overlay" style={{
                display: state.visibilityModal ? "flex" : "none"
            }}>
                <div className="modal">
                    <button className="modal-close" onClick={() =>
                        store.dispatch({
                            type: "CLOSE_MODAL"
                        })
                    }>
                        &#10060;
                    </button>
                    <div className="modal-content">
                        <h3>Добавить занятие за {new Date(activeDay).getDate()} ноября</h3>
                        <form action="">
                            <div className="form-row">
                                <label>
                                    Выберете вид занятия:
                                </label>
                                <select name="" id="" ref={node => {
                                    activity = node
                                }}>
                                    {
                                        activitiesTypesList.map((activity) =>
                                            <option key={activity.id} value={activity.name}>{activity.name}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className="form-row">
                                <label>
                                    Количество подходов:
                                </label>
                                <input type="text" ref={node => {
                                    approach = node
                                }}/>
                            </div>
                            <div className="form-row">
                                <label>
                                    Количество раз в подходе:
                                </label>
                                <input type="text" ref={node => {
                                    amount = node
                                }}/>
                            </div>
                            <div className="btn-wrapper">
                                <button className="btn-modal" onClick={(e) => {
                                    e.preventDefault();
                                    store.dispatch({
                                        type: "ADD_CALENDAR_DAY",
                                        day: activeDay,
                                        activity: activity.value,
                                        approach: approach.value,
                                        amount: amount.value
                                    });

                                    amount.value = "";
                                    approach.value = "";
                                }}>Добавить
                                </button>
                                <button className="btn-modal" onClick={(e) => {
                                    e.preventDefault();
                                    store.dispatch({
                                        type: "CLOSE_MODAL"
                                    });
                                    amount.value = "";
                                    approach.value = "";

                                }}>Отмена
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const PushApp = () => (
    <div>
        <Calendar />
        <ModalAdd />
    </div>
);

ReactDOM.render(
    <PushApp/>,
    document.getElementById('root')
);

registerServiceWorker();