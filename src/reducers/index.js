import {combineReducers} from 'redux'

import calendar from './calendar'
import modalVisibility from './modalVisibility'
import activityMaintenance from './activityMaintanance'

const pushApp = combineReducers({
    calendar,
    modalVisibility,
    activityMaintenance
});


export default pushApp;
