interface HeaderProps {
  onSearch?: any;
}

export default function Header(Props: HeaderProps) {
  return (
    <header>
      <div
        className={`py-4 flex flex-row ${
          Props.onSearch ? "justify-between" : "justify-center"
        }`}
      >
        <h1 className="font-bold text-white text-2xl">
          Movie<span className="font-normal">box</span>
        </h1>
        {Props.onSearch && (
          <input
            className="rounded-full bg-gray-600 md:w-60 px-4 text-gray-100 focus:outline-none"
            placeholder="Search"
            onChange={Props.onSearch}
          />
        )}
      </div>
    </header>
  );
}
