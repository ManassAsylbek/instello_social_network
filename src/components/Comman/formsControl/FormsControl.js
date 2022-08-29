import React from 'react';
import s from './formControle.module.css'

const  FormsInput = ({input,meta,...props}) => {
    const hasError = meta.error && meta.touched

    return (
        <div className={s.formControl +" "+(hasError? s.error: "") }>
            <input {...input} {...props} type="text"/>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export default FormsInput;