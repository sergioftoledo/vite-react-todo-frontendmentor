import { useEffect, useState } from "react";

import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

// const initialStateTodos = [
//   { id: 1, title: "Go to the gum", completed: false },
//   { id: 2, title: "Learn react js framework", completed: true },
//   { id: 3, title: "Buy Chabela food", completed: false },
//   { id: 4, title: "Get shower", completed: false },
// ];

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  const removeTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () =>
    setTodos(todos.filter((todo) => !todo.completed));

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const filteredSelect = (filter) => setFilter(filter);

  return (
    <div className="bg-white bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-contain bg-no-repeat min-h-screen dark:bg-very-dark-blue transition-all duration-1000">
      <Header />
      <main className="container mt-6 mx-auto px-4">
        <TodoCreate createTodo={createTodo} />
        <TodoList
          removeTodo={removeTodo}
          updateTodo={updateTodo}
          todos={filteredTodos()}
        />
        <TodoComputed
          todos={todos}
          itemsLeft={itemsLeft}
          clearCompleted={clearCompleted}
        />
        <TodoFilter filteredSelect={filteredSelect} filter={filter} />
      </main>
      <p className="mt-6 text-center text-sm text-dark-grayish-blue">
        Drag and drop to reorder list
      </p>
    </div>
  );
};

export default App;
