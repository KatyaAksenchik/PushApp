import React from 'react';
import {Component} from 'react';
import {ACTIVITIES_TYPES_LIST} from "../shared/const";
import {store} from "../index";
import {activeDay} from "../reducers/visibilityModal"

class ModalAdd extends Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const props = this.props;
        const state = store.getState();

        let activity, amount, approach;
        return (
            <div className="overlay" style={{
                display: state.visibilityModal ? "flex" : "none"
            }}>
                <div className="modal">
                    <button className="modal-close" onClick={() =>
                        store.dispatch({
                            type: "CLOSE_MODAL"
                        })
                    }>
                        &#10060;
                    </button>
                    <div className="modal-content">
                        <h3>Добавить занятие за {new Date(activeDay).getDate()} ноября</h3>
                        <form action="">
                            <div className="form-row">
                                <label>
                                    Выберете вид занятия:
                                </label>
                                <select name="" id="" ref={node => {
                                    activity = node
                                }}>
                                    {
                                        ACTIVITIES_TYPES_LIST.map((activity) =>
                                            <option key={activity.id} value={activity.name}>{activity.name}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className="form-row">
                                <label>
                                    Количество подходов:
                                </label>
                                <input type="text" ref={node => {
                                    approach = node
                                }}/>
                            </div>
                            <div className="form-row">
                                <label>
                                    Количество раз в подходе:
                                </label>
                                <input type="text" ref={node => {
                                    amount = node
                                }}/>
                            </div>
                            <div className="btn-wrapper">
                                <button className="btn-modal" onClick={(e) => {
                                    e.preventDefault();
                                    store.dispatch({
                                        type: "ADD_CALENDAR_DAY",
                                        day: activeDay,
                                        activity: activity.value,
                                        approach: approach.value,
                                        amount: amount.value
                                    });

                                    amount.value = "";
                                    approach.value = "";
                                }}>Добавить
                                </button>
                                <button className="btn-modal" onClick={(e) => {
                                    e.preventDefault();
                                    store.dispatch({
                                        type: "CLOSE_MODAL"
                                    });
                                    amount.value = "";
                                    approach.value = "";

                                }}>Отмена
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalAdd;