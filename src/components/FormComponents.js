import React from 'react';
import PropTypes from 'prop-types'

export const FormRowInput = ({children, onInputChange}) => {
    let text = null;

    return (
        <div className="form-row">
            <label>
                {children}
            </label>
            <input type="text" ref={node => {
                text = node;
                onInputChange(text);
            }}/>
        </div>
    )
};

// export const FormRowInput = ({children, onInputChange}) => {
//     return (
//         <div className="form-row">
//             <label>
//                 {children}
//             </label>
//             <input type="text" onChange={onInputChange(e)}/>
//         </div>
//     )
// };

FormRowInput.propTypes = {
    children: PropTypes.string,
    onInputChange: PropTypes.func
};


export const FormRowSelect = ({children, activities, onSelectChange}) => {
    let activeOption;

    return (
        <div className="form-row">
            <label>
                {children}
            </label>
            <select ref={node => {
                activeOption = node;
                onSelectChange(activeOption);
            }}>
                {
                    activities.map((activity) =>
                        <option key={activity.id} value={activity.name}>{activity.name}</option>
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