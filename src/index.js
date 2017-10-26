import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom'
import {combineReducers} from 'redux';
import {createStore} from 'redux';

//styles
import './assets/css/styles.css'
import registerServiceWorker from './registerServiceWorker';

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

const calendar = (state = [], action) => {
    switch (action.type) {
        case "INIT_CALENDAR":
            return [];
        case "SHOW_DATE":
            console.log(state);
            alert(action.date);
            return state;
        default:
            const currentYear = (new Date()).getFullYear();
            const currentmonth = (new Date()).getMonth();
            const firstDayOfMonth = new Date(currentYear, currentmonth, 1);
            let numberOfWeek = firstDayOfMonth.getDay() - 1;

            if (numberOfWeek === -1) {
                numberOfWeek = 6;
            }
            const daysInMonth = (new Date(currentYear, currentmonth + 1, 0)).getDate();

            let caledarDaysStart = [];
            if (numberOfWeek !== 0) {
                caledarDaysStart.length = numberOfWeek;
                caledarDaysStart.fill({"dayThisMonth": false}, 0, numberOfWeek);
            }

            for (let i = 1; i <= daysInMonth; i++) {
                caledarDaysStart.push({
                    "dayThisMonth": true,
                    "dayNumber": i,
                    "text": ["Push app", "Jump"]
                })
            }

            let length = caledarDaysStart.length;
            if (caledarDaysStart.length < 42) {
                caledarDaysStart.length = 42;
                caledarDaysStart.fill({"dayThisMonth": false}, length, 42);
            }

            return [...caledarDaysStart]
    }
};


const pushApp = combineReducers({cards, calendar});
const store = createStore(pushApp);


const ActivityItem = ({text}) => (
    <li>
        {text}
    </li>
);

// {/*<ul className="activities-list">*/}
// {/*{*/}
// {/*activities.map((a, i) =>*/}
// {/*<ActivityItem key={i} {...a}/>*/}
// {/*)*/}
// {/*}*/}
// {/*</ul>*/}

const ActivitiesList = ({activities}) => (
    <div>
        {
            activities.map((i) =>
                <ActivityItem text={i}/>
            )
        }
    </div>
);


const Card = ({onClick, dayThisMonth, dayNumber, text}) => (
    <div className="day">
        <div style={{display: dayThisMonth ? "block" : "none"}}>
            <p className="number">{dayNumber}</p>
            <button onClick={onClick}>&#10133;</button>
            <ActivitiesList activities={text}/>
        </div>
    </div>
);


const CalendarList = ({calendar, onDayClick}) => (
    <div className="calendar-body">
        {
            calendar.map((day, i) =>
                <Card key={i} {...day} onClick={() => onDayClick(day.dayNumber)}/>
            )
        }
    </div>
);

class PushApp extends Component {
    render() {
        return (
            <div>
                <div className="calendar">
                    <div className="calendar-header">
                        <div>Понедельник</div>
                        <div>Вторник</div>
                        <div>Среда</div>
                        <div>Четверг</div>
                        <div>Пятница</div>
                        <div>Суббота</div>
                        <div>Воскресенье</div>
                    </div>
                    <CalendarList calendar={this.props.calendar} onDayClick={(dayNumber) => {
                        store.dispatch({
                            type: "SHOW_DATE",
                            dayNumber
                        })
                    }}/>
                </div>
            </div>
        )
    }
}

const render = () => {
    ReactDOM.render(
        <PushApp cards={store.getState().cards} calendar={store.getState().calendar}/>,
        document.getElementById('root')
    )
};

store.subscribe(render);
render();

registerServiceWorker();
