import TaskRow from "./TaskRow"

const Tasks = ({ Newtask, eliminarTarea }) => {

    return (
        <div>

            <h2 className="text-center">Tabla de Datos</h2>
            <table className="col-8 m-auto table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Descripcion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {Newtask.length > 0 ? (
                        Newtask.map((el) => <TaskRow key={el.id} el={el} eliminarTarea={eliminarTarea} />
                        )
                    ) : (
                        <tr>
                            <td colSpan="3">No hay registros aun</td>

                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Tasks
