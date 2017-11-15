import React from 'react';
import {Component} from 'react';
import {store, activeDay} from "../index";

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

const Card = ({dayNumber, dayThisMonth, dayString, context}) => {
    let activitiesContent = null;

    if (dayThisMonth && context.length > 0) {
        activitiesContent = <ActivitiesList context={context}/>
    }

    if (dayThisMonth) {
        return (
            <div className="day">
                <button className="add" onClick={() => {
                    store.dispatch({
                        type: "OPEN_MODAL",
                        day: dayString
                    })
                }}>+
                </button>
                <p className="number">{dayNumber}</p>
                {activitiesContent}
            </div>
        )
    } else {
        return (
            <div className="day last-month">
            </div>
        )
    }
};

export default Card;