import React, {useState, useEffect, useCallback} from "react";

interface Props {
    initialValues: TValue,
    validate: (arg: TValue) => TError;
    onSubmit: (arg: TValue) => void;
}

type TValue = {
    [key: string]: any;
}

type TError = {
    [key: string]: string;
}

type TTouched = {
    [key: string]: boolean;
}

export default function useForm({initialValues, validate, onSubmit}: Props) {
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

    const getFieldProps = (name: string) => ({
        id: name,
        name,
        value: getKeyValue(values, name),
        onBlur: handleBlur,
        onChange: handleChange,
    });

    const getKeyValue = <T, U extends keyof T>(obj: T, key: U) => obj[key];

    return {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        getFieldProps,
    }
}
