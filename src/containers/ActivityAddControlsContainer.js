import {connect} from "react-redux"
import {addActivity, closeAddModal} from "../actions";
import {getActivityItem, getActiveStringDate} from "../shared/selectors"
import {ActivityAddControls} from "../components/ActivityFormComponents"
import {httpFormRecord, httpPostRecord} from "../shared/http";

const mapStateToProps = (state) => ({
    activityItem: getActivityItem(state),
    dayString: getActiveStringDate(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onCancelBtnClick: () => {
        dispatch(closeAddModal());
    },
    onAddBtnClick: (activityItem, dayString) => {
        console.log(activityItem);

        const item = httpFormRecord(dayString, activityItem);
        httpPostRecord(item);

        dispatch(addActivity());
    }
});

const ActivityAddControlsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ActivityAddControls);

export default ActivityAddControlsContainer;