import React, { useState } from 'react'
import "../css/Todo.css"
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FcCheckmark } from "react-icons/fc";
import { ImCheckmark } from "react-icons/im";


function Todo() {
  const [editable, setEditable] = useState(false);

  const toggleEdit = () => setEditable(prev => !prev);

  return (
    <div className=''>
      <div className="todo">
        <div className='title'>Type anythings</div>
        <div className='buttons'>
          {
            editable ? <ImCheckmark onClick={toggleEdit} className='check' /> : <MdEdit onClick={toggleEdit} className='edit' />
          }
          <MdDelete className='delete' />
        </div>
      </div>
    </div>
  )
}

export default Todo
