import IconMoon from "./icons/IconMoon";

const Header = () => {
  return (
    <header className="container mx-auto pt-12 px-8">
      <div className="flex justify-between mb-10">
        <h1 className="uppercase text-white text-2xl font-semibold tracking-[0.75rem]">
          todo
        </h1>
        <button>
          <IconMoon />
        </button>
      </div>
    </header>
  );
};

export default Header;
