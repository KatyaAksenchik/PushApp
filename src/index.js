import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux';

import ModalAddContainer from "./containers/ModalAddContainer";
import Calendar from "./components/Calendar"
import {loadCalendarTracks, loadActiveMonth} from "./reducers/tracks"
import pushApp from "./reducers/index"

//styles
import './assets/css/styles.css'
import registerServiceWorker from './registerServiceWorker';


let initCalendarState = () => {
    return {
        activeMonth: loadActiveMonth(),
        calendar: loadCalendarTracks()
    }
};

const store = createStore(pushApp, initCalendarState());

const PushApp = () => (
    <div>
        <Calendar />
        <ModalAddContainer />
    </div>
);

ReactDOM.render(
    <Provider store={store}>
        <PushApp/>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();