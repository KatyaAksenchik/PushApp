import {connect} from "react-redux"

import {chaneActivityState} from "../actions";
import {getActivityItem} from "../shared/selectors"
import {ActivityFormEntries} from "../components/ActivityFormComponents"

const mapStateToProps = (state) => ({
    activityItem: getActivityItem(state)
});

const mapDispatchToProps = (dispatch) => ({
    chaneActivityState: (value,key) => {
        dispatch(chaneActivityState(value,key))
    }
});

const ActivityFormEntriesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ActivityFormEntries);

export default ActivityFormEntriesContainer;