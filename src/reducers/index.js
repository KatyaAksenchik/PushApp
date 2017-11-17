import {combineReducers} from 'redux'
import calendar from './calendar'
// import visibilityModal from './visibilityModal'
import utils from  './utils'

const pushApp = combineReducers({
    calendar,
    utils
    // visibilityModal
});


export default pushApp;
