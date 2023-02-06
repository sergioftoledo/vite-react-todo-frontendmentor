const TodoFilter = ({ filteredSelect, filter }) => {
  return (
    <section className="container mx-auto mt-6">
      <div className="flex justify-center gap-5 rounded-md bg-white shadow-md py-5 dark:bg-very-dark-desaturated-blue transition-all duration-1000">
        <button
          onClick={() => filteredSelect("all")}
          className={`${
            filter === "all" ? "text-bright-blue font-bold" : "text-gray-400"
          }`}
        >
          All
        </button>
        <button
          onClick={() => filteredSelect("active")}
          className={`${
            filter === "active" ? "text-bright-blue font-bold" : "text-gray-400"
          }`}
        >
          Active
        </button>
        <button
          onClick={() => filteredSelect("completed")}
          className={`${
            filter === "completed"
              ? "text-bright-blue font-bold"
              : "text-gray-400"
          }`}
        >
          Completed
        </button>
      </div>
    </section>
  );
};

export default TodoFilter;
