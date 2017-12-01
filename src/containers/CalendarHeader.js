import {connect} from 'react-redux'
import {switchToNextMonth, switchToPrevMonth, updateCalendarToCurrentMonth} from "../actions/index";
import CalendarHeaderView from "../components/CalendarHeaderView";
import {getMonthName, getYear} from "../shared/getFromState"


const mapStateToProps = (state, ownProps) => ({
    monthName: getMonthName(state),
    year: getYear(state)
    // active: state.activeMonth
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    prevBtnClick: () => {
        dispatch(switchToPrevMonth())
    },
    nextBtnClick: () => {
        dispatch(switchToNextMonth())
    },
    currentBtnClick: () =>{
        dispatch(updateCalendarToCurrentMonth())
    }
});

const CalendarHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(CalendarHeaderView);

export default CalendarHeader;