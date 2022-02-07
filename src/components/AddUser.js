import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styles from './AddUser.module.css';

const AddUser = (props) => {


    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [tarea, setTarea] = useState('');




    const onSubmit = (data, e) => {
        console.log(data);
        props.createUser(data);

        //e.target.reset();
        //setTarea(tarea)
        reset();
    }

    return (
        <div className="" >

            <form onSubmit={handleSubmit(onSubmit)} className="">
                <label className="text-center d-block">Nombre</label>
                <input type="text" name="nombre"
                    className="mt-3 text-center d-block m-auto"
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
                <label className="text-center d-block">Nombre de Usuario</label>
                <input type="text" name="nombeUsuario"
                    className="mt-3 text-center d-block m-auto"
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
                <div className={styles.error} >
                    {errors.nombreUsuario && <span >{errors.nombreUsuario.message}</span>}
                </div>
                <button className="btn btn-primary  m-auto d-block"> Agregar usuario</button>
                {/*  <button type="button" className="mt-3 btn btn-primary btn-sm" onClick={() => reset()}> Limpiar</button> */}
            </form>
        </div>
    )
};

export default AddUser;
