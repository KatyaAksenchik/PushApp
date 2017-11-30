import {combineReducers} from 'redux'
import calendar from './calendar'
import utils from  './utils'
// import visibilityModal from './visibilityModal'

const pushApp = combineReducers({
    calendar,
    utils
    // visibilityModal
});


export default pushApp;
