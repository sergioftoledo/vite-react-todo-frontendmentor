import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
  return (
    <div className="bg-white overflow-hidden rounded-t-md shadow-xl dark:text-light-grayish-blue">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
