export const SearchInputs = () => {
  return (
    <div className="flex items-center rounded-xl">
      <input
        className="input rounded-xl h-16 focus:outline-0 focus:border-blue-300 w-[400px] mx-auto  focus:text-black focus:text-xl  px-4 border  font-medium placeholder:text-gray-400 placeholder:text-xl text-gray-400 transition-all duration-300"
        placeholder="Search for a name"
        readOnly={false}
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        data-testid="search-input-box-fake"
      />
    </div>
  );
};
