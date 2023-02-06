import IconCross from "./icons/IconCross";
import IconChecked from "./icons/IconChecked";

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
  const { id, title, completed } = todo;

  return (
    <article className="flex gap-4 px-8 py-5 items-center border-b border-gray-300 dark:border-gray-600 dark:bg-very-dark-desaturated-blue transition-all duration-1000">
      <button
        onClick={() => updateTodo(id)}
        className={`rounded-full border-2 w-5 h-5 ${
          completed
            ? "bg-gradient-to-r from-[#57ddff] to-[#c058f3] grid place-items-center"
            : "inline-block"
        }`}
      >
        {completed && <IconChecked />}
      </button>
      <p
        className={`grow dark:text-light-grayish-blue ${
          completed &&
          "text-light-grayish-blue dark:text-very-dark-grayish-blue line-through  transition-all duration-1000"
        }`}
      >
        {title}
      </p>
      <button onClick={() => removeTodo(id)}>
        <IconCross />
      </button>
    </article>
  );
};

export default TodoItem;
