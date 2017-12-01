import React from 'react';
import {ACTIVITIES_TYPES_LIST} from "../shared/const";
import {FormRowInput, FormRowSelect} from "./FormComponents"


class ModalAdd extends React.Component {
    constructor() {
        super();
        this.state = {
            activityItem: {
                activity: "",
                approach: "",
                amount: ""
            }
        };
    }

    setActivityItemState(element, description) {
        let newActivityItem = Object.assign({}, this.state.activityItem);
        newActivityItem[description] = element;

        this.setState({
            activityItem: newActivityItem
        })
    }

    setStateFromSelect(element, description){
        if(element.options[element.selectedIndex].dataset.default === "false"){
            this.setActivityItemState(element.value, description);
        }
    }

    render() {
        if (!this.props.visibility) {
            return null;
        }
        else {
            return (
                <div className="overlay">
                    <div className="modal">
                        <button className="modal-close" onClick={this.props.onCancelBtnClick}>
                            <span role="img" aria-label="Close">&#10060;</span>
                        </button>
                        <div className="modal-content">
                            <h3>Добавить занятие за {this.props.activeDay}.{this.props.activeMonth}</h3>

                            <FormRowSelect activities={ACTIVITIES_TYPES_LIST} onSelectChange={(activities) =>
                                this.setStateFromSelect(activities, "activity")
                            }>
                                Выберете вид занятия:
                            </FormRowSelect>

                            <FormRowInput onInputChange={(approach) =>
                                this.setActivityItemState(approach, "approach")}>
                                Количество подходов:
                            </FormRowInput>

                            <FormRowInput onInputChange={(amount) =>
                                this.setActivityItemState(amount, "amount")}>
                                Количество раз в подходе:
                            </FormRowInput>

                            <div className="btn-wrapper">
                                <button className="btn-modal" onClick={(e) =>
                                    this.props.onAddBtnClick(e, this.state.activityItem, this.props.dayString)}>
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
}

export default ModalAdd;