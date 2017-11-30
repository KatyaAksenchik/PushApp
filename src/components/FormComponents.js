import React from 'react';
import PropTypes from 'prop-types'

export const FormRowInput = ({children, onInputChange}) => {
    return (
        <div className="form-row">
            <label>
                {children}
            </label>
            <input type="text" onChange={(e) => onInputChange(e.target.value)}/>
        </div>
    )
};

FormRowInput.propTypes = {
    children: PropTypes.string,
    onInputChange: PropTypes.func
};


export const FormRowSelect = ({children, activities, onSelectChange}) => {
    return (
        <div className="form-row">
            <label>
                {children}
            </label>
            <select onChange={(e) => onSelectChange(e.target)}>
                <option value="Выберите значение" data-default = {true}>Выберите значение</option>
                {
                    activities.map((activity) =>
                        <option key={activity.id} data-default = {false} value={activity.name}>
                            {activity.name}
                        </option>
                    )
                }
            </select>
        </div>
    )
};

FormRowSelect.propsTypes = {
    children: PropTypes.element,
    activities: PropTypes.array,
    onSelectChange: PropTypes.func
};


///Почему в FormRowSelect не ругается на children: PropTypes.element, а в FormRowInput
// Warning: Failed prop type: Invalid prop `children` of type `string` supplied to `FormRowInput`, expected a single ReactElement.