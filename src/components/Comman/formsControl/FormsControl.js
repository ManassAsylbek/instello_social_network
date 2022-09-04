import React from 'react';
import s from './formControle.module.css'
import {Field} from "redux-form";


export const FormsInput = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched

    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <input {...input} {...props}/>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export default FormsInput


export const FormsTextArea = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <textarea {...input} {...props}/>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};




export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field
            placeholder={placeholder}
            name={name}
            validate={validators}
            component={component}
            {...props}
        />{text}
    </div>

)