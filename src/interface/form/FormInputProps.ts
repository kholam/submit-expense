interface FormInputProps {
    type?: string;
    name?: string;
    placeholder?: string;
    required?: boolean;
    style?: React.CSSProperties;
    className?: string;
    handleChange?: React.ChangeEventHandler<HTMLInputElement>;
    value?: string;
    defaultValue?: string;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

export default FormInputProps;