import React from 'react';
import PropTypes from 'prop-types'

const ActivityItem = ({activity, approach, amount}) => {
    return (
        <li className="activity-item">
            <p className="name">
                {activity}
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

const ActivitiesList = ({exercisesTracks}) => {
    return (
        <ul className="activities-list">
            {
                exercisesTracks.map((item, i) =>
                    <ActivityItem key={i} {...item}/>
                )
            }
        </ul>
    )
};

ActivitiesList.propTypes = {
    exercisesTracks: PropTypes.array
};

export default ActivitiesList;