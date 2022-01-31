
import { useState } from 'react';


const initialState = {
    todoName: "",
    todoDescripcion: ""
}
const TaskForm = ({ CreateTask }) => {

    const [form, setForm] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(form);
        CreateTask(form);
    }
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <h1 className="text-center">Lista de Tareas</h1>
            <form onSubmit={handleSubmit} className="col-8 m-auto">
                <div className="form-group">
                    Title
                    <input type="text"

                        name="todoName" className="form-control"
                        onChange={handleChange}
                        value={form.todoName}
                    />


                </div>
                <div>

                    <input type="text"
                        className="form-control"
                        name="todoDescripcion"
                        onChange={handleChange}
                        className="form-control"
                        value={form.todoDescripcion}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default TaskForm
