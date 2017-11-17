import {connect} from 'react-redux'
import {addActivity, closeModalWindow} from "../actions/index";
import ModalAdd from '../components/ModalAdd'


const mapStateToProps = (state) => ({
    visibility: state.visibilityModal,
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
