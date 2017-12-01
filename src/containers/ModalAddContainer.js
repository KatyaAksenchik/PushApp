import {connect} from 'react-redux'
import {addActivity, closeModalWindow} from "../actions/index";
import ModalAdd from '../components/ModalAdd'
import {getMonthIndexNumber, getDate, getModalVisibility, getActiveStringDate} from '../shared/getFromState'
import {httpPostRecord, httpFormRecord} from "../shared/http"


const mapStateToProps = (state) => ({
    visibility: getModalVisibility(state),
    activeDay: getDate(state),
    activeMonth: getMonthIndexNumber(state),
    dayString: getActiveStringDate(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onAddBtnClick: (e, activityItem, dayString) => {
        e.preventDefault();

        const item = httpFormRecord(dayString, activityItem);
        httpPostRecord(item);

        dispatch(addActivity(activityItem, ownProps.dayString));
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
