import React from 'react';
import TodoList from './components/TodoList';
import NewTask from './components/NewTask';


// ? React Type provided by react
const App: React.FC = () => {

  const todos = [{id:'t1', text:'Learn TypeScript With react'}]

  return (
    <div className="App">

      <NewTask/>

      <TodoList items={todos}/>
    
    </div>
  );

}

export default App;
