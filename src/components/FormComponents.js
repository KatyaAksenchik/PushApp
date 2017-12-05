import React from 'react';
import PropTypes from 'prop-types'


export const FormRowInput = ({children, value, onInputChange}) => {
    return (
        <div className="form-row">
            <label>
                {children}
            </label>
            <input
                type="text"
                value={value}
                onChange={(e) => onInputChange(e.target.value)}
            />
        </div>
    )
};

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
