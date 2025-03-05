import './App.css'
import Footer from './components/Footer'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {

  return (
    <>
      <div>
        <TodoCreate />
        <TodoList />
        <Footer />
      </div>
    </>
  )
}

export default App
