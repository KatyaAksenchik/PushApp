import {connect} from "react-redux"

import ActivityItem from "../components/ActivityItem"
import {openEditModal} from "../actions/index";


const mapDispatchToProps = (dispatch) => ({
    onItemClick: (id, activityItem, dayString) => {
        dispatch(openEditModal(id, activityItem, dayString));
    }
});

const ActivityItemContainer = connect(
    undefined,
    mapDispatchToProps
)(ActivityItem);

export default ActivityItemContainer;
