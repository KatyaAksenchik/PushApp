import React from 'react';
import PropTypes from 'prop-types'

import {FormRowInput, FormRowSelectFromObject} from './FormComponents'
import {ACTIVITIES_TYPES_LIST} from '../shared/const';
import {validateNumberField} from '../shared/validation'
import {FormValidatedInput} from './ValidationsWrappers'

export const ActivityFormEntries = ({activityItem, chaneActivityState}) => {
    return (
        <div className="formEntries">
            <FormRowSelectFromObject
                data={ACTIVITIES_TYPES_LIST}
                value={activityItem.activity}
                onSelectChange={(activity) => chaneActivityState(activity, "activity")}
                onBlur={() => console.log("BLUR")}
            >
                Выберете вид занятия:
            </FormRowSelectFromObject>

            <FormValidatedInput
                labelText={"Количество подходов:"}
                validate={validateNumberField}
                value={activityItem.approach}
                onValidateInput = {(approach) => chaneActivityState(approach, "approach")}
            />

            <FormValidatedInput
                labelText={"Количество раз в подходе:"}
                validate={validateNumberField}
                value={activityItem.amount}
                onValidateInput = {(amount) => chaneActivityState(amount, "amount")}
            />


            {/*<FormRowInput*/}
                {/*validate={validateNumberField}*/}
                {/*value={activityItem.approach}*/}
                {/*onInputChange={(approach) => chaneActivityState(approach, "approach")}*/}
            {/*>*/}
                {/*Количество подходов:*/}
            {/*</FormRowInput>*/}


            {/*<FormRowInput*/}
                {/*validate={validateNumberField}*/}
                {/*value={activityItem.amount}*/}
                {/*onInputChange={(amount) => chaneActivityState(amount, "amount")}*/}
            {/*>*/}
                {/*Количество раз в подходе:*/}
            {/*</FormRowInput>*/}


        </div>
    )
};
ActivityFormEntries.propTypes = {
    activityItem: PropTypes.object,
    chaneActivityState: PropTypes.func
};

export const ActivityAddControls = ({activityItem, dayString, onCancelBtnClick, onAddBtnClick}) => {
    return (
        <div className="btn-wrapper">
            <button className="btn-modal"
                    onClick={() => onAddBtnClick(activityItem, dayString)}
            >
                Добавить
            </button>
            <button className="btn-modal"
                    onClick={onCancelBtnClick}
            >
                Отмена
            </button>
        </div>
    )
};
ActivityAddControls.propTypes = {
    activityItem: PropTypes.object,
    dayString: PropTypes.object,
    onCancelBtnClick: PropTypes.func,
    onAddBtnClick: PropTypes.func
};


export const ActivityEditControls = ({activityItem, dayString, id, onCancelBtnClick, onEditBtnClick, onDeleteBtnClick}) => {
    return (

        <div className="btn-wrapper">
            <button className="btn-modal"
                    onClick={() => onEditBtnClick(activityItem, dayString, id)}
            >
                Сохранить
            </button>
            <button className="btn-modal" onClick={() => onDeleteBtnClick(id)}>
                Удалить
            </button>
            <button className="btn-modal"
                    onClick={onCancelBtnClick}
            >
                Отмена
            </button>
        </div>
    )
};
ActivityEditControls.propTypes = {
    activityItem: PropTypes.object,
    dayString: PropTypes.object,
    onCancelBtnClick: PropTypes.func,
    onAddBtnClick: PropTypes.func
};
