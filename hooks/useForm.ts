import React, {useState, useEffect, useCallback} from 'react';

interface Props<T> {
    initialValues: T,
    validate: (arg: T) => {};
    onSubmit: (arg: T) => void;
}

type TTouched = {
    [key: string]: boolean;
}

interface IValue {
    [key: string]: string;
}

export default function useForm<T>({initialValues, validate, onSubmit}: Props<T>) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setTouched({
            ...touched,
            [e.target.name]: true,
        })
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        setTouched(
            Object.keys(values).reduce((touched, field) => {
                touched[field] = true;
                return touched;
            }, {} as TTouched)
        );

        const errors = validate(values);
        setErrors(errors);
        if (Object.values(errors).some(v => v)) {
            return;
        }

        onSubmit(values);
    };

    const runValidator = useCallback(() => validate(values), [values]);

    useEffect(() => {
        const errors = runValidator();
        setErrors(errors);
    }, [runValidator]);

    // const getFieldProps = (name: string) => ({
    //     name,
    //     value: getKeyValue<keyof IValue, IValue>(name)(values),
    //     onBlur: handleBlur,
    //     onChange: handleChange,
    // });
    //
    // // best
    // const getKeyValue = <T extends object, U extends keyof T>(key: U) => (obj: T) => obj[key];

    return {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
    }
}
