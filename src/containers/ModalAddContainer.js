import {connect} from "react-redux"

import ModalWrapper from "../components/ModalWrapper"
import {closeAddModal} from "../actions/index";



const mapStateToProps = (state) => ({
    visibility: state.modalVisibility.addModal,
    dayString: state.activityMaintenance.dayString
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onCancelBtnClick: () => {
        dispatch(closeAddModal());
    }
});

const ModalWrapperContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalWrapper);

export default ModalWrapperContainer;
