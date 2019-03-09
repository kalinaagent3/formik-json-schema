import React from 'react';
import Label from './Label';
import { getIn } from 'formik';
import ErrorMessage from './ErrorMessage';
import { changeHandler, joinNames } from '../utils';

const Radio = ({ config, formik, value, error }) => {
    const {
        name,
        type,
        label,
        attributes,
        options,
        labelClass = '',
        fieldClass = 'form-check-input',
        formGroupClass = 'form-group'
    } = config;
    const { handleChange, handleBlur } = formik;

    return (
        <div className={ formGroupClass }>
            <Label htmlFor={ name } className={ labelClass }>{ label }</Label>
            { options.map(( option ) =>
                <div className="form-check" key={ option.value }>
                    <label htmlFor={ name + '_' + option.value } className="form-check-label">
                        <input
                            name={ name }
                            type="radio"
                            className={ fieldClass + ( error ? ' is-invalid ' : '' ) }
                            id={ name + '_' + option.value }
                            value={ option.value }
                            defaultChecked={ value == option.value }
                            onChange={ event => {
                                changeHandler(handleChange, formik, config, event);
                                handleBlur(event);
                            }}
                            { ...attributes } /> { option.title }
                    </label>
                </div>
            ) }
            <ErrorMessage name={ name } />
        </div>
    );
}

export default React.memo(Radio);
