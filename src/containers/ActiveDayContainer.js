import {connect} from 'react-redux'
import {openModalWindow} from "../actions/index";
import ActiveDay from '../components/ActiveDay'

// const initActivitiesList = (context) => {
//     if (context.length > 0) {
//         return context;
//     }
//     return [];
// };

const mapStateToProps = (ownProps) => ({
    dayNumber: ownProps.dayNumber
    //,
    // context: initActivitiesList(ownProps.context)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        // console.log("ownProps", ownProps);
        dispatch(openModalWindow(ownProps.dayString))
    }
});

const ActiveDayContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ActiveDay);

export default ActiveDayContainer;

