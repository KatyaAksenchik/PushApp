import {connect} from 'react-redux'
import {openModalWindow} from "../actions/index";
import ActiveDay from '../components/ActiveDay'
import {getActivitiesList} from "../shared/getFromState"

const mapStateToProps = (state, ownProps) => ({
    exercisesTracks: getActivitiesList(ownProps)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(openModalWindow(ownProps.dayString))
    }
});

const ActiveDayContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ActiveDay);

export default ActiveDayContainer;

