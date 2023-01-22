import React from 'react';
import {useForm} from 'react-hook-form'
import styles from "./Form.module.css"
import Button from "../UI/Button";

const Form = ({vin}) => {

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    })
    const onSubmitHandler = (data) => {
        vin(data.vinCode);
        reset();
    }

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="wrapper">
                    <input
                        placeholder="Введите Ваш VIN code"
                        {...register('vinCode', {
                            required: "Поле обязательно к заполнению",
                            maxLength: {
                                value: 17,
                                message: 'Поле должно содержать 17 символов'
                            },
                            pattern: {
                                value: /[A-Za-z0-9]/,
                                message: 'Запрещенные символы'
                            },
                        })}
                    />

                    <Button type="submit" title="Поиск">
                        Поиск
                    </Button>
                </div>

                <div className={styles.message}>{errors?.vinCode && <p>{errors?.vinCode?.message || "Error!"}</p>}</div>
            </form>
        </div>
    );
};

export default Form;