import {connect} from "react-redux"
import {closeEditModal, updateCalendar} from "../actions";
import {getActivityItem, getActiveStringDate, getActivityItemId} from "../shared/selectors"
import {ActivityEditControls} from "../components/ActivityFormComponents"
import {httpUpdateItem, httpDeleteItem, setDatabase} from "../shared/http";

const mapStateToProps = (state) => ({
    activityItem: getActivityItem(state),
    dayString: getActiveStringDate(state),
    id: getActivityItemId(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onCancelBtnClick: () => {
        dispatch(closeEditModal());
    },
    onDeleteBtnClick: (id) => {
        let result = httpDeleteItem(id);
        setDatabase(result);

        dispatch(updateCalendar());
    },
    onEditBtnClick: (activityItem, dayString, id) => {
        let response = httpUpdateItem(activityItem, id);
        setDatabase(response);

        dispatch(updateCalendar());
    }
});

const ActivityAddControlsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ActivityEditControls);

export default ActivityAddControlsContainer;