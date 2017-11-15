import {combineReducers} from 'redux'
import calendar from './calendar'
import visibilityModal from './visibilityModal'

const pushApp = combineReducers({
    calendar,
    visibilityModal
});


export default pushApp;
