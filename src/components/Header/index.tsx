export default function Header() {
  return (
    <header>
      <div className="py-4 flex flex-row justify-between">
        <h1 className="font-bold text-white text-2xl">
          Movie<span className="font-normal">box</span>
        </h1>
        <input
          className="rounded-full bg-gray-600 md:w-60 px-4 text-gray-100 focus:outline-none"
          placeholder="Search"
        />
      </div>
    </header>
  );
}
