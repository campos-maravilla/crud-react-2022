import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styles from './AddUser.module.css';

const AddUser = (props) => {


    const { register, handleSubmit, reset, formState: { errors } } = useForm();



    const onSubmit = (data, e) => {
        console.log(data);
        props.createUser(data);

        e.target.reset();
    }

    return (
        <div className="" >

            <form onSubmit={handleSubmit(onSubmit)} className="d-flex  flex-column justify-content-center sm  align-items-center">
                <label>Nombre</label>
                <input type="text" name="nombre"

                    {...register("nombre", {
                        required: {
                            value: true,
                            message: "El campos es requerido"
                        },
                        pattern: {
                            value: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
                            message: "El nombre solo debe tener letras"
                        }
                    })
                    } />
                <div className={styles.error}>
                    {errors.nombre && <span >{errors.nombre.message}</span>}
                </div>
                <label>Nombre de Usuario</label>
                <input type="text" name="nombeUsuario"
                    className="mt-3"
                    {...register("nombreUsuario", {
                        required: {
                            value: true,
                            message: "El campos es requerido"
                        },
                        maxLength: {
                            value: 15,
                            message: "Solo se aceptan 20 caracteres"
                        }
                    })
                    }

                />
                <div className={styles.error}>
                    {errors.nombreUsuario && <span >{errors.nombreUsuario.message}</span>}
                </div>
                <button className="mt-3 btn btn-primary btn-sm" > Agregar usuario</button>
            </form>
        </div >
    )
};

export default AddUser;
