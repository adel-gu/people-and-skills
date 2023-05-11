import React from 'react';
import { MdPersonSearch } from 'react-icons/md';

const SearchBar = () => {
  const handleChange = () => {
    console.log('yes');
  };
  return (
    <div className="">
      <form
        action=""
        className="border border-green-500 flex items-center gap-2 px-3 py-1 rounded-full"
      >
        <span>
          <MdPersonSearch />
        </span>
        <div className="w-full">
          <input
            type="text"
            className="w-full"
            placeholder="search skills by peaople"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
