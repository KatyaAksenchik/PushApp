import React from 'react'


const ModalWrapper = ({visibility, children, headerTitle, dayString, onCancelBtnClick}) => {
    if (!visibility) {
        return null;
    }
    return (
        <div className="overlay">
            <div className="modal">
                <button className="modal-close" onClick={onCancelBtnClick}>
                    <span role="img" aria-label="Close">&#10060;</span>
                </button>
                <div className="modal-content">
                    <h3> {headerTitle}
                        {` ${(new Date(dayString)).getDate()}`}.{`${(new Date(dayString)).getMonth() + 1}`}
                    </h3>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
};


export default ModalWrapper;