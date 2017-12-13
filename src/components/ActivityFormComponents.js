import React from 'react';
import PropTypes from 'prop-types'

import {FormRowInput, FormRowSelectFromObject} from './FormComponents'
import {ACTIVITIES_TYPES_LIST} from '../shared/const';

export const ActivityFormEntries = ({activityItem, chaneActivityState}) => {
    return (
        <div className="formEntries">
            <FormRowSelectFromObject
                data={ACTIVITIES_TYPES_LIST}
                value={activityItem.activity}
                onSelectChange={(activity) => chaneActivityState(activity, "activity")}
            >
                Выберете вид занятия:
            </FormRowSelectFromObject>

            <FormRowInput
                value={activityItem.approach}
                onInputChange={(approach) => chaneActivityState(approach, "approach")}
            >
                Количество подходов:
            </FormRowInput>

            <FormRowInput
                value={activityItem.amount}
                onInputChange={(amount) => chaneActivityState(amount, "amount")}
            >
                Количество раз в подходе:
            </FormRowInput>
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
                    onClick={() => onEditBtnClick(activityItem,dayString,id)}
            >
                Сохранить
            </button>
            <button className="btn-modal"  onClick={() => onDeleteBtnClick(id)}>
                Удалить
            </button>
            <button className="btn-modal"
                    onClick={onCancelBtnClick}
            >
                Отмена
            </button>
            <div>
                {console.log(dayString)}
            </div>

        </div>
    )
};
ActivityEditControls.propTypes = {
    activityItem: PropTypes.object,
    dayString: PropTypes.object,
    onCancelBtnClick: PropTypes.func,
    onAddBtnClick: PropTypes.func
};
