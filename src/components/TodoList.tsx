import React from 'react'
import "../css/TodoList.css"
import Todo from './Todo'
import { useSelector } from 'react-redux'
import { RootState } from '@reduxjs/toolkit/query'
import { TodoType } from '../types/Types'


function TodoList() {
  const { todos } = useSelector((state: RootState) => state.todo);
  return (
    <div>
      {
        todos && todos.map((todo: TodoType) => (
          <Todo key={todo.id} todo={todo} />
        ))
      }
    </div>
  )
}

export default TodoList
