import React, { useState } from 'react';
import UserTable from './UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUser from './AddUser';
import EditForm from './EditForm';


const CrudApp = () => {

    const usersData = [
        { id: uuidv4(), nombre: 'Lorena', nombreUsuario: 'lore' },
        { id: uuidv4(), nombre: 'Luis', nombreUsuario: 'lu' },
        { id: uuidv4(), nombre: 'Katia', nombreUsuario: 'katy' }
    ]

    const [users, setUser] = useState(usersData);

    const createUser = (user) => {
        user.id = uuidv4()
        setUser([
            ...users, user
        ])
    }

    const deleteUser = (id) => {
        //console.log(id);
        const arrayFilter = users.filter(user => user.id !== id);
        setUser(arrayFilter)
    }

    const [editar, setEditar] = useState(false);

    const [actualizarUsuario, setActualizarUsuario] = useState({
        id: null, nombre: '', nombreUsuario: ''
    })

    const editarFila = (user) => {
        setEditar(true);
        setActualizarUsuario({
            id: user.id, nombre: user.nombre, nombreUsuario: user.nombreUsuario
        })
    }

    const modificarUsuario = (id, modificarUsuario) => {
        setEditar(false);

        setUser(users.map(user => (user.id === id ? modificarUsuario : user)))
    }
    return (
        <div className="container">
            <h1 className="text-center">Crud App</h1>
            <div className="row d-flex justify-content-center">
                <div className="col-md-6  ">
                    {editar ? (
                        <div>
                            <h2 className="text-center">Editar Usuario</h2>
                            <EditForm actualizarUsuario={actualizarUsuario}
                                modificarUsuario={modificarUsuario}
                            />
                        </div>

                    ) : (
                        <div>

                            <h3 className="text-center">Agregar Usuario</h3>
                            <AddUser createUser={createUser} />
                        </div>
                    )
                    }

                </div>

                <div className="row m-auto">
                    <div className="col-12">

                        <h3 className="text-center text-nowrap">Lista de Usuarios</h3>
                        <UserTable users={users}
                            deleteUser={deleteUser}
                            editarFila={editarFila}

                        />
                    </div>



                </div>
            </div>
        </div>

    )
};

export default CrudApp;
