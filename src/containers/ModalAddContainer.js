import {connect} from 'react-redux'
import {addActivity, closeModalWindow} from "../actions/index";
import ModalAdd from '../components/ModalAdd'
import {MONTHS_NAME} from '../shared/const'


const getMonthName = (date) => {
    const month = (new Date(date)).getMonth();
    return month + 1;
};

const getDate = (date) => {
    return (new Date(date)).getDate();
};

const mapStateToProps = (state) => ({
    visibility: state.utils.modal,
    activeDay: getDate(state.utils.day),
    activeMonth: getMonthName(state.utils.day)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onAddBtnClick: (e, activityItem) => {
        e.preventDefault();
        dispatch(addActivity(activityItem));
    },
    onCancelBtnClick: () => {
        dispatch(closeModalWindow());
    }
});

const ModalAddContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalAdd);

export default ModalAddContainer;
