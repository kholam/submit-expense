import React from 'react';
import LabelProps from '../../interface/form/LabelProps';

const Label = ({ text, style, className = "form-label" }: LabelProps): React.ReactElement => {
    return (
        <label className={className} style={style}> {text} </label>
    )
}

export default Label;