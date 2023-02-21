import { useEffect, useState } from "react";

import { DragDropContext } from "@hello-pangea/dnd";

import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

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

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return;

    setTodos((prevsTasks) =>
      reorder(prevsTasks, source.index, destination.index)
    );
  };

  return (
    <div className="bg-white bg-[url('./assets/images/bg-mobile-light.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-contain bg-no-repeat min-h-screen dark:bg-very-dark-blue transition-all duration-1000">
      <Header />
      <main className="container mt-6 mx-auto px-4 md:max-w-xl">
        <TodoCreate createTodo={createTodo} />
        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            todos={filteredTodos()}
          />
        </DragDropContext>
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
