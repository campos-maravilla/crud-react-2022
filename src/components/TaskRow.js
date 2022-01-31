import React from 'react';
const TaskRow = ({ el, eliminarTarea }) => {
    let { todoName, todoDescripcion, id } = el;
    return (

        <tr>
            <td>{todoName}</td>
            <td>{todoDescripcion}</td>
            <td>
                <button >Editar</button>
                <button onClick={() => eliminarTarea(id)}>Eliminar</button>
            </td>

        </tr>

    )
}

export default TaskRow
