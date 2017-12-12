import {connect} from "react-redux"
import {addActivity, closeEditModal} from "../actions";
import {getActivityItem, getActiveStringDate} from "../shared/selectors"
import {ActivityEditControls} from "../components/ActivityFormComponents"
import {httpFormRecord, httpPostRecord} from "../shared/http";

const mapStateToProps = (state) => ({
    activityItem: getActivityItem(state),
    dayString: getActiveStringDate(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onCancelBtnClick: () => {
        dispatch(closeEditModal());
    },
    onEditBtnClick: (activityItem, dayString) => {

        const item = httpFormRecord(dayString, activityItem);
        httpPostRecord(item);

        dispatch(addActivity());
    }
});

const ActivityAddControlsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ActivityEditControls);

export default ActivityAddControlsContainer;