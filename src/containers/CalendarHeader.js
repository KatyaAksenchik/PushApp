import {connect} from 'react-redux'
import {MONTHS_NAME} from "../shared/const";
import {changeMonth} from "../actions/index";
import CalendarHeaderView from "../components/CalendarHeaderView";


let currMonth = 10;

const mapStateToProps = () => ({
    monthName: MONTHS_NAME[currMonth]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    prevBtnClick: () => {
        dispatch(changeMonth(currMonth))
    },
    nextBtnClick: () => {
        dispatch(changeMonth(currMonth))
    }
});

const CalendarHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(CalendarHeaderView);

export default CalendarHeader;