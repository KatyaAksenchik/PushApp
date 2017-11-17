import React from 'react';
import {ACTIVITIES_TYPES_LIST} from "../shared/const";

const FormRowInput = ({children, onInputChange}) => {
    let text = null;

    return (
        <div className="form-row">
            <label>
                {children}
            </label>
            <input type="text" ref={node => {
                text = node;
                onInputChange(text);
            }}/>
        </div>
    )
};

const FormRowSelect = ({children, activities, onSelectChange}) => {
    let activeOption;

    return (
        <div className="form-row">
            <label>
                {children}
            </label>
            <select ref={node => {
                activeOption = node;
                onSelectChange(activeOption);
            }}>
                {
                    activities.map((activity) =>
                        <option key={activity.id} value={activity.name}>{activity.name}</option>
                    )
                }
            </select>
        </div>
    )
};

const ModalAdd = ({visibility, activeDay, activeMonth, onAddBtnClick, onCancelBtnClick}) => {

    let activityItem = {
        activity: null,
        approach: null,
        amount: null
    };

    return (
        <div className="overlay" style={{
            display: visibility ? "flex" : "none"
        }}>
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
};

export default ModalAdd;