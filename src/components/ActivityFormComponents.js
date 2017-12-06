import React from 'react';
import PropTypes from 'prop-types'

import {FormRowInput, FormRowSelectFromObject} from './FormComponents'
import {ACTIVITIES_TYPES_LIST} from '../shared/const';

export const ActivityFormEntries = ({activityItem, onChangeActivity, onChangeApproach, onChangeAmount}) => {
    return (
        <div className="formEntries">
            <FormRowSelectFromObject
                data={ACTIVITIES_TYPES_LIST}
                value={activityItem.activity}
                onSelectChange={(activity) => onChangeActivity(activity)}
            >
                Выберете вид занятия:
            </FormRowSelectFromObject>

            <FormRowInput
                value={activityItem.approach}
                onInputChange={(approach) => onChangeApproach(approach)}
            >
                Количество подходов:
            </FormRowInput>

            <FormRowInput
                value={activityItem.amount}
                onInputChange={(amount) => onChangeAmount(amount)}
            >
                Количество раз в подходе:
            </FormRowInput>
        </div>
    )
};
ActivityFormEntries.propTypes = {
    activityItem: PropTypes.object,
    onChangeActivity: PropTypes.func,
    onChangeApproach: PropTypes.func,
    onChangeAmount: PropTypes.func
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


export const ActivityEditControls = ({activityItem, dayString, onCancelBtnClick, onAddBtnClick}) => {
    return (
        <div className="btn-wrapper">
            <button className="btn-modal"
                    onClick={() => onAddBtnClick(activityItem, dayString)}
            >
                Сохранить
            </button>
            <button className="btn-modal">
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
