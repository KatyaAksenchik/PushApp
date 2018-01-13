import {connect} from 'react-redux'

import ActiveDay from '../components/ActiveDay'
import {openAddModal} from "../actions/index";


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

