import React from 'react';

const UserTable = (props) => {

    console.log(props.users);

    return <>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Usuario</th>
                    <th>Acciones</th>

                </tr>
            </thead>
            <tbody>
                {
                    props.users.length > 0 ?
                        props.users.map(user => (
                            <tr key={user.id}>
                                <td>{user.nombre}</td>
                                <td>{user.nombreUsuario}</td>
                                <td className="d-flex">
                                    <button className="btn btn-primary btn-sm mr-2"
                                        onClick={() => { props.editarFila(user) }}
                                    >Edit</button>

                                    <button className="btn btn-danger btn-sm"
                                        onClick={() => { props.deleteUser(user.id) }}
                                    >Delete</button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan={3} className="text-center">No hay usuarios</td>
                            </tr>
                        )
                }
            </tbody>
        </table>
    </>;
};

export default UserTable;
