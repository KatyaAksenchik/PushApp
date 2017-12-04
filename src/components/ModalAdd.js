import React from 'react';

import {FormRowInput, FormRowSelect} from "./FormComponents"
import {ACTIVITIES_TYPES_LIST} from "../shared/const";


const INITIAL_STATE_ACTIVITY_ITEM = {
    activity: "",
    approach: "",
    amount: ""
};

class ModalAdd extends React.Component {
    constructor() {
        super();
        this.state = {
            activityItem: INITIAL_STATE_ACTIVITY_ITEM
        };
    }

    setActivityItemState(value, key) {
        this.setState({
            activityItem: {
                ...this.state.activityItem,
                [key]: value
            }
        })
    }

    setStateToDefault() {
        this.setState({
            activityItem: INITIAL_STATE_ACTIVITY_ITEM
        })
    }

    setStateFromSelect(element, description) {
        if (element.options[element.selectedIndex].dataset.default === "false") {
            this.setActivityItemState(element.value, description);
        }
    }

    render() {
        if (!this.props.visibility) {
            return null;
        }
        return (
            <div className="overlay">
                <div className="modal">
                    <button className="modal-close" onClick={this.props.onCancelBtnClick}>
                        <span role="img" aria-label="Close">&#10060;</span>
                    </button>
                    <div className="modal-content">
                        <h3>Добавить занятие за {this.props.activeDay}.{this.props.activeMonth}</h3>

                        <FormRowSelect
                            data={ACTIVITIES_TYPES_LIST}
                            value={this.state.activityItem.activity}
                            onSelectChange={(activities) => this.setStateFromSelect(activities, "activity")
                        }>
                            Выберете вид занятия:
                        </FormRowSelect>

                        <FormRowInput
                            value={this.state.activityItem.approach}
                            onInputChange={(approach) => this.setActivityItemState(approach, "approach")}
                        >
                            Количество подходов:
                        </FormRowInput>

                        <FormRowInput
                            value={this.state.activityItem.amount}
                            onInputChange={(amount) => this.setActivityItemState(amount, "amount")}
                        >
                            Количество раз в подходе:
                        </FormRowInput>

                        <div className="btn-wrapper">
                            <button className="btn-modal" onClick={(e) => {
                                this.props.onAddBtnClick(e, this.state.activityItem, this.props.dayString);
                                this.setStateToDefault();
                            }}>
                                Добавить
                            </button>
                            <button className="btn-modal" onClick={this.props.onCancelBtnClick}>
                                Отмена
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalAdd;
