import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom'
import {combineReducers} from 'redux';
import {createStore} from 'redux';

//styles
import './assets/css/styles.css'
import registerServiceWorker from './registerServiceWorker';


let excerciseId = 2;
let excercise = [
    {
        id: 0,
        date: "Fri Nov 02 2017 00:00:00 GMT+0300 (Belarus Standard Time)",
        task: [{
            activity: "Jump",
            approach: 10,
            amount: 5
        },
            {
                activity: "Push app",
                approach: 3,
                amount: 10
            }
        ]
    },
    {
        id: 1,
        date: "Fri Nov 06 2017 00:00:00 GMT+0300 (Belarus Standard Time)",
        task: [{
            activity: "Jump",
            approach: 10,
            amount: 5
        },
            {
                activity: "Push app",
                approach: 3,
                amount: 10
            }]
    }
];

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


const card = (state, action) => {
    switch (action.type) {
        case  'ADD_CARD':
            return {
                id: action.id,
                date: action.date,
                repeats: action.repeats,
                amounts: action.amounts
            };
        case 'EDIT_CARD':
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                date: action.date,
                repeats: action.repeats,
                amounts: action.amounts
            };
        default:
            return state
    }
};

const cards = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CARD':
            return [
                ...state,
                card(undefined, action)
            ];
        case "EDIT_CARD":
            return state.map(c => card(c, action));
        default :
            return []
    }
};

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


let initDaysOfCurrentMonth = (excersises, daysInMonth) => {
    let filledDays = [];

    excersises.forEach((item) => {
        const index = new Date(item.date).getDate();
        let tasks = [];
        item.task.forEach((item) => {
            tasks.push(item);
        });

        filledDays[index] = {
            "dayThisMonth": true,
            "context": tasks
        };
    });


    for (let i = 0; i <= daysInMonth; i++) {
        if (!filledDays[i]) {
            filledDays[i] = {
                "dayThisMonth": true,
                "dayNumber": i + 1,
                "context": []
            };
        } else {
            filledDays[i].dayNumber = i + 1;
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

let loadCalendarTracks = (currentmonth = (new Date()).getMonth(), currentYear = (new Date()).getFullYear()) => {
    const firstDayOfMonth = new Date(currentYear, currentmonth, 1);

    let numberOfWeek = firstDayOfMonth.getDay() - 1;
    if (numberOfWeek === -1) {
        numberOfWeek = 6;
    }

    const daysInMonth = (new Date(currentYear, currentmonth + 1, 0)).getDate();

    let dayPrevMonth = initDaysOfPrevMonth(numberOfWeek);
    let daysThisMonth = initDaysOfCurrentMonth(excercise, daysInMonth);
    return initVisibleDays(dayPrevMonth.concat(daysThisMonth));

};

const calendar = (state = [], action) => {
    switch (action.type) {
        case "INIT_CALENDAR":
            return state;
        case "ADD_CALENDAR_DAY":
            let newDay = {
                activity: action.activity,
                approach: action.approach,
                amount: action.amount
            };
            console.log("Add callendar", newDay);
            return state;
        default:
            return state;
    }
};


let initCalendarState = () => {
    return {calendar: loadCalendarTracks()}
};

const pushApp = combineReducers({cards, calendar, visibilityModal});
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

const Card = ({dayNumber, dayThisMonth, context}) => {
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
                        day: dayNumber
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

const CalenderHeader = () => (
    <div className="calendar-header">
        <div className="month">
            <h2 className="title">Ноябрь</h2>
            <button className="month-btn prev-month">
                Назад
            </button>
            <button className="month-btn next-month">
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
                <CalenderHeader/>
                <CalendarBody calendar={state.calendar}/>
            </div>
        )
    }
}

// activity: "Push app",
//     approach: 3,
//     amount: 10

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
                        <h3>Добавить занятие за {activeDay} ноября</h3>
                        <form action="">
                            <div className="form-row">
                                <label>
                                    Выберете вид занятия:
                                </label>
                                <select name="" id="" onChange={(e) => activity = e.target.value}>
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
                                <button className="btn-submit" onClick={(e) => {
                                    e.preventDefault();
                                    store.dispatch({
                                        type: "ADD_CALENDAR_DAY",
                                        day: activeDay,
                                        activity,
                                        approach: approach.value,
                                        amount: amount.value
                                    });
                                }}>Добавить занятие
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