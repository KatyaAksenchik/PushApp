import {connect} from "react-redux"

import {changeActivity, changeApproach, changeAmount} from "../actions";
import {getActivityItem} from "../shared/selectors"
import {ActivityFormEntries} from "../components/ActivityFormComponents"

const mapStateToProps = (state) => ({
    activityItem: getActivityItem(state)
});

const mapDispatchToProps = (dispatch) => ({
    onChangeActivity: (activity) => {
        dispatch(changeActivity(activity))
    },
    onChangeApproach: (approach) => {
        dispatch(changeApproach(approach))
    },
    onChangeAmount: (amount) => {
        dispatch(changeAmount(amount))
    }
});

const ActivityFormEntriesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ActivityFormEntries);

export default ActivityFormEntriesContainer;