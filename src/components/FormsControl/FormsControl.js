import {useField} from "formik";

export const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;
    return (
        <div className="input__item">
            <label htmlFor={props.id || props.name}>{label}</label>
            <input autoComplete="off" className={hasError ? "text__input_error" : "text__input"} {...field} {...props} />
            {hasError ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export const MyTextareaInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;
    return (
        <div className="input__item">
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea rows={3} className={hasError ? "textarea__input_error" : "textarea__input"} {...field} {...props} />
            {hasError ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};