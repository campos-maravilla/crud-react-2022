import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styles from './AddUser.module.css';

const EditForm = (props) => {

    console.log(props.actualizarUsuario);

    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
        defaultValues: props.actualizarUsuario
    });

    setValue('nombre', props.actualizarUsuario.nombre);
    setValue('nombreUsuario', props.actualizarUsuario.nombreUsuario);



    const onSubmit = (data, e) => {
        console.log(data);
        data.id = props.actualizarUsuario.id;

        props.modificarUsuario(props.actualizarUsuario.id, data)

        e.target.reset();
    }

    return (
        <div className="m-auto w-40" >

            <form onSubmit={handleSubmit(onSubmit)} >
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
                <label className="text-center d-block">Nombre usuario</label>
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
                <div className={styles.error}>
                    {errors.nombreUsuario && <span >{errors.nombreUsuario.message}</span>}
                </div>
                <button className="mt-3 btn btn-primary m-auto d-block" > Editar nuevo usuario</button>
            </form>
        </div>
    )
};

export default EditForm;
