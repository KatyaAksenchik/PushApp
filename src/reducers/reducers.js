import {combineReducers} from 'redux'
import cards from './cards'
// import visibilityFilter from './visibilityFilter'

const pushApp = combineReducers({cards});
export default pushApp;
