import {combineReducers} from 'redux'

import calendar from './calendar'
// import utils from  './utils'
import addActivityModal from './addActivityModal'

const pushApp = combineReducers({
    calendar,
    // utils
    addActivityModal
});


export default pushApp;
