import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {

  return (
    <>
      <div>
        <Header />
        <TodoCreate />
        <TodoList />
        <Footer />
      </div>
    </>
  )
}

export default App
