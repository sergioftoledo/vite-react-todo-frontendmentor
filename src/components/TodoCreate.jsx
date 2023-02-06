import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();

    title.trim().length > 0 && (createTodo(title), setTitle(""));
  };

  return (
    <form
      onSubmit={handleSubmitAddTodo}
      className="bg-white overflow-hidden my-6 flex gap-4 items-center py-5 rounded-md px-8 dark:bg-very-dark-desaturated-blue transition-all duration-1000"
    >
      <input
        className="w-full outline-none dark:bg-very-dark-desaturated-blue  dark:text-light-grayish-blue transition-all duration-1000"
        type="text"
        name="create-todo"
        id="create-todo"
        placeholder="Create a new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoCreate;
