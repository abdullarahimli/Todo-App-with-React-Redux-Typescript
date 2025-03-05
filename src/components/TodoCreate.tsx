import "../css/TodoCreate.css"

function TodoCreate() {

  
  return (
    <div className='todo-create'>
      <div className='title'>Todo App</div>
      <div className='body'>
        <input
          className='form-control'
          type="text"
          placeholder='Enter a task'
        />
        <button className='btn btn-primary'>ADD</button>
        <div className='line'></div>
      </div>
    </div>
  )
}

export default TodoCreate
