import React from 'react';
import PropTypes from 'prop-types';

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
};

InputField.defaultProps = {
    label: "",
    type: "text",
    className: "",
    placeholder: "",
};

function InputField(props) {
    const {
        name,
        label,
        type,
        placeholder,
        className,
        onChange
    } = props;

    return (
        <div>
            {label && <label htmlFor="">{name}</label>}
            <input
                type={type}
                id={name}
                placeholder={placeholder}
                className={className}
                onChange={onChange}
            />
        </div>
    );
}

export default InputField;