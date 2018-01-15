import React from 'react';
import PropTypes from 'prop-types'


// export const FormRowInput = ({children, value, onInputChange}) => {
//     return (
//         <div className="form-row">
//             <label>
//                 {children}
//             </label>
//             <input
//                 type="text"
//                 value={value}
//                 onChange={(e) => onInputChange(e.target.value)}
//                 onBlur={() => console.log("BLUR")}
//             />
//         </div>
//     )
// };

const ErrorMessage = ({children}) => (
    <div className="error-message">
        {children}
    </div>
);


// const INITIAL_STATE = {
//     error: "",
//     valid: true
// };

export class FormRowInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: "",
            valid: true
        }
    }

    _validateInput(e) {
        let validation = this.props.validate(e.target.value);

        if (!validation.message || e.target.value === "") {
            // this.props.onInputChange(e.target.value);
            this.state = {
                error: "",
                valid: true
            };

            return e.target.value;
        } else {
            console.log(validation.message);
            // this.props.onInputChange(e.target.value);
            this.state = {
                error: validation.message,
                valid: false
            };

            console.log(this.state);
            return e.target.value;
        }
    }

    _onBlur(e) {
        let validation = this.props.validate("katya");
        console.log(validation);
    }

    render() {
        console.log(this.state);

        let showError = this.state.valid;
        console.log("showError", showError);


        return (
            <div className="form-row">
                <label>
                    {this.props.children}
                </label>
                <input
                    type="text"
                    value={this.props.value}
                    onChange={(e) => this.props.onInputChange(this._validateInput(e))}
                />
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


export const Example = 0;

FormRowInput.propTypes = {
    children: PropTypes.string,
    value: PropTypes.string,
    onInputChange: PropTypes.func
};

export const FormRowSelect = ({children, value, data, onSelectChange}) => {
    return (
        <div className="form-row">
            <label>
                {children}
            </label>
            <select onChange={(e) => {
                onSelectChange(e.target.value)
            }}>
                {
                    data.map((item, i) =>
                        <option key={i} value={item.id}>
                            {item[i]}
                        </option>
                    )
                }
            </select>
        </div>
    )
};
FormRowSelect.propsTypes = {
    children: PropTypes.element,
    value: PropTypes.string,
    activities: PropTypes.array,
    onSelectChange: PropTypes.func
};


export const FormRowSelectFromObject = ({children, value, data, onSelectChange}) => {
    let options = [];

    for (let prop in data) {
        let option = (
            <option key={prop} value={prop}>
                {data[prop]}
            </option>
        );
        options.push(option);
    }

    return (
        <div className="form-row">
            <label>
                {children}
            </label>
            <select value={value} onChange={(e) => {
                onSelectChange(e.target.value)
            }}>
                {options}
            </select>
        </div>
    )
};

FormRowSelectFromObject.propsTypes = {
    children: PropTypes.element,
    value: PropTypes.string,
    activities: PropTypes.array,
    onSelectChange: PropTypes.func
};
