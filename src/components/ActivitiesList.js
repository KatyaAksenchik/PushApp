import React from 'react';
import PropTypes from 'prop-types'

import ActivityItemContainer from '../containers/ActivityItemContainer'

const ActivitiesList = ({exercisesTracks}) => {
    return (
        <ul className="activities-list">
            {
                exercisesTracks.map((item, i) =>
                    <ActivityItemContainer key={i} {...item.exercises} id={item.id}/>
                )
            }
        </ul>
    )
};

ActivitiesList.propTypes = {
    exercisesTracks: PropTypes.array
};

export default ActivitiesList;
