import {connect} from 'react-redux'
import {addActivity, closeModalWindow} from "../actions/index";
import ModalAdd from '../components/ModalAdd'
import {getMonthName, getDate, getModalVisibility} from '../shared/getFromState'


const mapStateToProps = (state) => ({
    visibility: getModalVisibility(state),
    activeDay: getDate(state),
    activeMonth: getMonthName(state)
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
