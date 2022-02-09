import React from 'react';
import { FormInputProps } from '../../interface';

const FormInput = ({
    type = "text",
    name, placeholder,
    required = false,
    style,
    className,
    handleChange,
    value,
    defaultValue,
    onFocus,
    onBlur
}: FormInputProps): React.ReactElement => {

    return (
        <input
            type={type}
            required={required}
            name={name}
            className={className}
            placeholder={placeholder}
            style={style}
            onChange={handleChange}
            value={value}
            defaultValue={defaultValue}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    )
}; 

export default FormInput;