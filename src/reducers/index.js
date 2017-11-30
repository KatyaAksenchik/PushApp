import {combineReducers} from 'redux'
import calendar from './calendar'
// import visibilityModal from './visibilityModal'
import utils from  './utils'
import activeMonth from "./activeCalendar"

const pushApp = combineReducers({
    activeMonth,
    calendar,
    utils
    // visibilityModal
});


export default pushApp;
