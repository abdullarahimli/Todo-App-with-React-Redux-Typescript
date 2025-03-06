import { useState } from "react"
import "../css/TodoCreate.css"
import { useDispatch } from "react-redux"
import { TodoType } from "../types/Types";
import { createTodo } from "../redux/todoSlice";

function TodoCreate() {


  const [newTodo, setNewTodo] = useState<string>('')

  const dispatch = useDispatch();

  const handleCreateTodo = () => {

    if (newTodo.trim().length == 0) {
      alert("Please, write something")
      return;
    }

    const payload: TodoType = {
      id: Math.floor(Math.random() * 99999),
      content: newTodo
    }

    dispatch(createTodo(payload));
    setNewTodo("");

  }
  return (
    <div className='todo-create'>
      <div className='title'>Todo App</div>
      <div className='body'>
        <input
          className='form-control'
          type="text"
          placeholder='Enter a task'
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
        />
        <button onClick={handleCreateTodo} className='btn btn-primary'>ADD</button>
        <div className='line'></div>
      </div>
    </div>
  )
}

export default TodoCreate
