const TodoComputed = ({ itemsLeft, clearCompleted }) => {
  return (
    <section className="flex justify-between px-8 py-5 rounded-b-md bg-white dark:bg-very-dark-desaturated-blue shadow-xl transition-all duration-1000">
      <span className="text-dark-grayish-blue text-sm">
        {itemsLeft} items left
      </span>
      <button
        onClick={clearCompleted}
        className="text-dark-grayish-blue text-sm"
      >
        Clear Completed
      </button>
    </section>
  );
};

export default TodoComputed;
