import React from 'react';
// import PropTypes from 'prop-types'
import {FormRowInput} from './FormComponents'

export class FormValidatedInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: "",
            valid: false
        }
    }

    _validateField(data) {
        let validation = this.props.validate(data);

        this.setState((state) => {
            if (!validation.message || data === "") {
                return {
                    error: "",
                    valid: true,
                }
            }
            else return {
                error: validation.message,
                valid: false
            }
        });

        return data;
    }

    render() {
        let showError = this.state.valid;

        return (
            <div className="form-row-wrapper">
                <FormRowInput
                    onFieldChange={(data) => this.props.onValidateInput(this._validateField(data))}
                    value={this.props.value}
                    labelText={this.props.labelText}
                />
                {/*{*/}
                    {/*this.props.children*/}
                {/*}*/}
                {
                    !showError &&
                    <ErrorMessage>
                        {this.state.error}
                    </ErrorMessage>
                }
            </div>
        )
    }
}

// const ValidatedInput = () => {
//     return (
//         <Validate>
//             <FormRowInput
//                 onFieldChange={(data) => this.props.onValidateInput(this._validateField(data))}
//                 value={this.props.value}
//                 labelText={this.props.labelText}
//             />
//         </Validate>
//     )
// };


const ErrorMessage = ({children}) => (
    <div className="error-message">
        {children}
    </div>
);