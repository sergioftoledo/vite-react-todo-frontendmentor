import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
  return (
    <div className="bg-white bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat min-h-screen">
      <header className="container mx-auto pt-12 px-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-2xl font-semibold tracking-[0.75rem]">
            todo
          </h1>
          <button>
            <MoonIcon />
          </button>
        </div>
        <form className="bg-white overflow-hidden mt-6 flex gap-4 items-center py-5 rounded-md px-8">
          <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
          <input
            className="w-full outline-none"
            type="text"
            name="create-todo"
            id="create-todo"
            placeholder="Create a new todo"
          />
        </form>
      </header>
      <main className="container mt-6 mx-auto px-8">
        <div className="bg-white rounded-md shadow-xl">
          <article className="flex gap-4 px-8 py-5 items-center border-b border-gray-300">
            <button className="rounded-full border-2 w-5 h-5 inline-block"></button>
            <p className="text-light-grayish-blue line-through grow">
              Complete online Javascript course.
            </p>
            <button className="">
              <MoonIcon />
            </button>
          </article>
          <section className="flex justify-between px-8 py-5 ">
            <span className="text-dark-grayish-blue text-sm">5 items left</span>
            <button className="text-dark-grayish-blue text-sm">
              Clear Completed
            </button>
          </section>
        </div>
      </main>
      <section className="container mx-auto px-8 mt-6">
        <div className="flex justify-center gap-5 px-8 rounded-md bg-white shadow-md py-5">
          <button className="text-bright-blue">All</button>
          <button className="hover:text-very-dark-blue  text-very-dark-grayish-blue">
            Active
          </button>
          <button className=" hover:text-very-dark-blue text-very-dark-grayish-blue">
            Completed
          </button>
        </div>
      </section>
      <p className="mt-6 text-center text-sm text-dark-grayish-blue">
        Drag and drop to reorder list
      </p>
    </div>
  );
};

export default App;
