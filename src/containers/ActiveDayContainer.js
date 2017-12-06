import {connect} from 'react-redux'
import {openAddModal} from "../actions/index";
import ActiveDay from '../components/ActiveDay'
import {getActivitiesList} from "../shared/selectors"

const mapStateToProps = (state, ownProps) => ({
    exercisesTracks: getActivitiesList(ownProps)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(openAddModal(ownProps.dayString))
    }
});

const ActiveDayContainer = connect(
    undefined,
    mapDispatchToProps
)(ActiveDay);

export default ActiveDayContainer;

