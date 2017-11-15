import React from 'react';

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

const ActivitiesList = ({context}) => {
    return (
        <ul className="activities-list">
            {
                context.map((item, i) =>
                    <ActivityItem key={i} {...item}/>
                )
            }
        </ul>
    )
};

export default ActivitiesList;