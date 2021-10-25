import React from 'react';
import PropTypes from 'prop-types';

SelectField.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.array,
    className: PropTypes.string,
    defaultOption: PropTypes.string,
    onChange: PropTypes.func,
};

SelectField.defaultProps = {
    options: [],
    disabled: false,
};

function SelectField(props) {
    const {
        id,
        name,
        label,
        options,
        className,
        defaultOption,
        onChange
    } = props;

    return (
        <>
            {label && <label htmlFor={id} >{name}</label>}
            <select
                className={className}
                id={id}
                options={options}
                onChange={onChange}
            >
                <option value={defaultOption}>{defaultOption}</option>
                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </>
    );
}

export default SelectField;