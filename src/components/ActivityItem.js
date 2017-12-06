import React from 'react';
import PropTypes from 'prop-types'

import {ACTIVITIES_TYPES_LIST} from '../shared/const'

const ActivityItem = ({activity, approach, amount, id, onItemClick}) => {
    return (
        <li className="activity-item" onClick = {() => onItemClick(id, {activity, approach, amount})}>
            <p className="name">
                {ACTIVITIES_TYPES_LIST[activity]}
            </p>
            <p className="amount">
                {approach}x {amount}
            </p>
        </li>
    )
};
ActivityItem.propTypes = {
    activity: PropTypes.string,
    approach: PropTypes.string,
    amount: PropTypes.string
};

export default ActivityItem;
