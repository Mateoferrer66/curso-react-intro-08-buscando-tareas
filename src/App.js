import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


const defaultTodos = [
  { text: ' Tomar Agua ', completed: true },
  { text: ' Tomar el Curso de React.js ', completed: false },
  { text: ' Hacer Ejercicio' , completed: false },
  { text: ' Montar en bicicleta ', completed: false },
];


function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase(); //convertir todo a minuscula el lowercase
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText); //retorna e incluye la arrow dunction e incuye la busqueda del texto
    }
  );

  console.log('Los usuarios buscan todos de ' + searchValue);
  
  return (
    <>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos} 
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}

export default App;
