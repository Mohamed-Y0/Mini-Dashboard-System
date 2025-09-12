function Search({ searchTerm, setSearchTerm }) {
  return (
    <input
      className="w-full rounded-lg border border-neutral-200 px-2.5 py-2.5 shadow-lg ring ring-neutral-400 focus:outline-neutral-300"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      type="search"
      name="search-users"
      id="search-users"
      placeholder="Search By Name, Email, Role.."
    />
  );
}

export default Search;
