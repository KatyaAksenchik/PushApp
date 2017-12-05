import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actions from "../actions/index"
import CalendarHeaderView from "../components/CalendarHeaderView"
import {getMonthName, getYear} from "../shared/selectors"


const mapStateToProps = (state, ownProps) => ({
    monthName: getMonthName(state),
    year: getYear(state)
});

const mapDispatchToProps = (dispatch) => {
    const bindActions = bindActionCreators(actions, dispatch);
    return {
        prevBtnClick: bindActions.switchToPrevMonth,
        nextBtnClick: bindActions.switchToNextMonth,
        currentBtnClick: bindActions.updateCalendarToCurrentMonth
    }
};

const CalendarHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(CalendarHeaderView);

export default CalendarHeader;