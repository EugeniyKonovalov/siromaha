"use client";

import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div className="hidden xl:flex min-w-80 px-2 py-1 items-center bg-slate-600 rounded-lg text-sm font-normal">
      <input
        type="text"
        placeholder="search..."
        className="bg-transparent p-0 outline-none w-full"
      />
      <FaSearch size={16} className="text-slate-300" />
    </div>
  );
};

export default SearchInput;
