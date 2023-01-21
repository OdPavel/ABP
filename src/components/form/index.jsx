import React from 'react';
import {useForm} from 'react-hook-form'
import styles from "./Form.module.css"
import Button from "../UI/Button";

const Form = ({vin}) => {
    const [vinCode, setVinCode] = React.useState('')
    const {
        register,
        formState:{
            errors,
        },
        handleSubmit,
    } = useForm()
    const onSubmitHandler = (e) => {
        e.preventDefault();
        alert(e.target.value)
        vin(vinCode)
        setVinCode('')
    }

    const handlerChange = ({target}) => {
        setVinCode(target.value)
    }
    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <input
                    value={vinCode}
                    placeholder="Введите Ваш VIN code"
                    onChange={handlerChange}
                    required
                    min="17"
                    max="17"
                />
                <Button type="submit" title="Поиск">
                    Поиск
                </Button>
            </form>
        </div>
    );
};

export default Form;