import React from 'react';
import { FormInputProps } from '../../interface';

/* custom react input component
 default prop values { type => "text", required = "false" }
 name -> name of the form field
 defaultValue -> default value for the input text
 className -> styling using class names
 style -> inline styling for component
 onFocus - > on focus change event handler
 onBlur -> on blur change event handler
 handleChange -> change event handler
*/

const FormInput = ({
    type = "text", // default value is text
    name, placeholder,
    required = false, //default value is falses
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