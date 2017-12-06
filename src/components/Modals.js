import React from 'react';

import ModalAddContainer from "../containers/ModalAddContainer"
import ModalEditContainer from "../containers/ModalEditContainer"
import ActivityFormEntriesContainer from "../containers/ActivityFormEntriesContainer"
import ActivityAddControlsContainer from "../containers/ActivityAddControlsContainer"
import ActivityEditControlsContainer from "../containers/ActivityEditControlsContainer"


const Modals = () => (
    <div className="modals-container">
        <ModalAddContainer headerTitle="Добавить запись за">
            <ActivityFormEntriesContainer />
            <ActivityAddControlsContainer />
        </ModalAddContainer>

        <ModalEditContainer headerTitle="Редактировать запись за">
            <ActivityFormEntriesContainer />
            <ActivityEditControlsContainer />
        </ModalEditContainer>
    </div>
);

export default Modals;