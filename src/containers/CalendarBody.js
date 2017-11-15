import {connect} from 'react-redux';
import CalendarDaysList from '../components/CalendarDaysList'


const mapStateToProps = (state) => ({
    calendar: state.calendar
});

const CalendarBody = connect(
    mapStateToProps
)(CalendarDaysList);

export default CalendarBody;