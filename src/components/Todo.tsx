import React, { useState } from 'react'
import "../css/Todo.css"
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FcCheckmark } from "react-icons/fc";
import { ImCheckmark } from "react-icons/im";
import { NewTodoType, TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { deleteTodoById, updateTodo } from '../redux/todoSlice';

function Todo({ todo }: NewTodoType) {
  const { id, content } = todo;

  const [editable, setEditable] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(content);

  const dispatch = useDispatch()
  const toggleEdit = () => setEditable(prev => !prev);

  const handleDeleteTodo = () => {
    dispatch(deleteTodoById(id))
  }

  const handleUpdateTodo = () => {
    const payload: TodoType = {
      id: id,
      content: newTodo
    }

    dispatch(updateTodo(payload));
    setEditable(false);
  }

  return (
    <div className=''>
      <div className="todo">
        <div className='title'>
          {
            editable ? <input style={{ border: "none", outline: "none" }} type="text" value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} /> : <div>{content}</div>
          }
        </div>
        <div className='buttons'>
          {
            editable ? <ImCheckmark onClick={handleUpdateTodo} className='check' /> : <MdEdit onClick={toggleEdit} className='edit' />
          }
          <MdDelete onClick={handleDeleteTodo} className='delete' />
        </div>
      </div>
    </div>
  )
}

export default Todo
