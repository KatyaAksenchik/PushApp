import {connect} from 'react-redux'
import {MONTHS_OPERATION_TYPES} from "../shared/const";
import {changeMonth} from "../actions/index";
import CalendarHeaderView from "../components/CalendarHeaderView";
import {getMonthName} from "../shared/getFromState"


const mapStateToProps = (state, ownProps) => ({
    monthName: getMonthName(state),
    active: state.activeMonth
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    prevBtnClick: () => {
        dispatch(changeMonth(10, 2017, MONTHS_OPERATION_TYPES.prevMonth, ownProps.active))
    },
    nextBtnClick: () => {
        dispatch(changeMonth(10, 2017, MONTHS_OPERATION_TYPES.nextMonth))
    }
});

const CalendarHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(CalendarHeaderView);

export default CalendarHeader;