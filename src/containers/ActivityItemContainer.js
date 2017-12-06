import {connect} from "react-redux"

import ActivityItem from "../components/ActivityItem"
import {openEditModal} from "../actions/index";
import {ACTIVITIES_TYPES_LIST} from "../shared/const";


const mapDispatchToProps = (dispatch) => ({
    onItemClick: (id, activityItem) => {
        dispatch(openEditModal(id, activityItem));
    }
});

const ActivityItemContainer = connect(
    undefined,
    mapDispatchToProps
)(ActivityItem);

export default ActivityItemContainer;
