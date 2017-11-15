import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux';

// import ModalAdd from "./components/ModalAdd";
import Calendar from "./components/Calendar"
import {loadCalendarTracks} from "./reducers/tracks"
import pushApp from "./reducers/index"

//styles
import './assets/css/styles.css'
import registerServiceWorker from './registerServiceWorker';


// export let activeDay = null;

let initCalendarState = () => {
    return {calendar: loadCalendarTracks()}
};

const store = createStore(pushApp, initCalendarState());
const PushApp = () => (
    <div>
        <Calendar />
        {/*<ModalAdd />*/}
    </div>
);

ReactDOM.render(
    <Provider store={store}>
        <PushApp/>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();