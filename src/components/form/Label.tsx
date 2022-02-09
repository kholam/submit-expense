import React from 'react';
import LabelProps from '../../interface/form/LabelProps';

// custom react label component
// default value for className is "form-label"
// text -> text for the label
// className  = styling using class names
const Label = ({ text, style, className = "form-label" }: LabelProps): React.ReactElement => {
    return (
        <label className={className} style={style}> {text} </label>
    )
}

export default Label;