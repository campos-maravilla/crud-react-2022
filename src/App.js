

import { useState } from 'react';

import CrudApp from './components/CrudApp';



const InitialTodo = [
  {
    id: 1,
    todoName: 'hacer el el login',
    todoDescripcion: 'registro de usuarios'
  },
  {
    id: 2,
    todoName: 'hacer la interfaz',
    todoDescripcion: 'hacer formularios'
  }
];
function App() {

  const [listTodo, setListTodo] = useState(InitialTodo);

  const CreateTask = (Newtask) => {
    Newtask.id = Date.now();
    //console.log(Newtask);
    setListTodo([...listTodo, Newtask]);

  }

  const eliminarTarea = (id) => {
    //alert("click");
    let eliminar = listTodo.filter((el) => el.id !== id);
    setListTodo(eliminar);
  }


  return (
    <div className="container">

      <hr />
      <CrudApp />
    </div>
  );
}

export default App;
