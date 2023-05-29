import { createContext, useState } from 'react';

const todoContext = createContext({
  todos: [],
  addDailyTodo: (name) => {},
  updateDailyTodo: (name) => {},
  completeTodo: () => {},
});

export function TodoContextProvider(props) {
  const [todos, setTodos] = useState([
    {
      title: 'Todo 1',
      description: 'This is a todo',
      complete: false,
      type: 'none',
    },
    {
      title: 'Todo 2',
      description: 'This is a todo',
      complete: false,
      type: 'important',
    },
    {
      title: 'Todo 3',
      description: 'This is a todo',
      complete: false,
      type: 'warning',
    },
    {
      title: 'Todo 4',
      description: 'This is a todo',
      complete: false,
      type: 'none',
    },
  ]);

  function AddDailyTodo(title, description, type) {
    const newTodo = {
      title: title,
      description: description,
      complete: false,
      type: type,
    };
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  }

  function UpdateDailyTodo() {}

  function CompleteTodo() {}

  const context = {
    todos: todos,
    addDailyTodo: AddDailyTodo,
    updateDailyTodo: UpdateDailyTodo,
    completeTodo: CompleteTodo,
  };

  return (
    <todoContext.Provider value={context}>
      {props.children}
    </todoContext.Provider>
  );
}

export default todoContext;
