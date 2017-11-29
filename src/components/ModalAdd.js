import React from 'react';
import {ACTIVITIES_TYPES_LIST} from "../shared/const";
import {FormRowInput, FormRowSelect} from "./FormComponents"


const ModalAdd = ({visibility, activeDay, activeMonth, onAddBtnClick, onCancelBtnClick}) => {

    let activityItem = {
        activity: null,
        approach: null,
        amount: null
    };

    if (!visibility) {
        return null;
    }
    else {
        return (
            <div className="overlay">
                <div className="modal">
                    <button className="modal-close" onClick={onCancelBtnClick}><span role="img"
                                                                                     aria-label="Close">&#10060;</span>
                    </button>
                    <div className="modal-content">
                        <h3>Добавить занятие за {activeDay}.{activeMonth}</h3>
                        <FormRowSelect activities={ACTIVITIES_TYPES_LIST} onSelectChange={(input) => {
                            activityItem.activity = input;
                        }}>
                            Выберете вид занятия:
                        </FormRowSelect>

                        <FormRowInput onInputChange={(input) => {
                            activityItem.approach = input;
                        }}>Количество подходов:</FormRowInput>

                        <FormRowInput onInputChange={(input) => {
                            activityItem.amount = input;
                        }}>Количество раз в подходе:</FormRowInput>

                        <div className="btn-wrapper">
                            <button className="btn-modal" onClick={(e) => onAddBtnClick(e, activityItem)}>Добавить
                            </button>
                            <button className="btn-modal" onClick={onCancelBtnClick}>Отмена
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default ModalAdd;