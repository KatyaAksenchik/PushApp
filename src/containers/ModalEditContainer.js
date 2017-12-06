import {connect} from "react-redux"

import ModalWrapper from "../components/ModalWrapper"
import {closeEditModal} from "../actions/index";



const mapStateToProps = (state) => ({
    visibility: state.modalVisibility.editModal,
    dayString: state.activityMaintenance.dayString
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onCancelBtnClick: () => {
        dispatch(closeEditModal());
    }
});

const ModalEditContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalWrapper);

export default ModalEditContainer;
