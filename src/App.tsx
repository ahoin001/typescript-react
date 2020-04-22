import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTask from './components/NewTask';
import { Todo } from './todo.model'


// ? ReactFunc Type provided by react
const App: React.FC = () => {

  // ?useState is generic, we tell it what to expect (array of our todo type)
  const [todos, setTodos] = useState<Todo[]>([])

  const addTaskHandler = (text: string) => {

    console.log(text)

    // ? prev provided by useState to be sure most current state is used ( react schedules state changes so issues can arise)
    setTodos((prevTodos) =>
      [
        ...prevTodos,
        { id: Math.random().toString(), task: text }
      ])
  }

  const deleteTaskHandler = (todoId: string) => {
    
    setTodos( (prevTodos) => {

      return prevTodos.filter(todo => todo.id !== todoId)

    })

  }
  

  return (
    <React.Fragment>

      <NewTask addTask={addTaskHandler} />

      <TodoList items={todos} deleteTask={deleteTaskHandler}/>

    </React.Fragment>
  );

}

export default App;
