import React, { ChangeEvent, useState } from 'react';
import { MdPersonSearch } from 'react-icons/md';
import Options from './Options';

const SearchBar = () => {
  const [isChange, setIsChange] = useState(false);

  const handleChange = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    currentTarget.value ? setIsChange(true) : setIsChange(false);
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
            onChange={handleChange}
          />
        </div>
      </form>
      {isChange && <Options />}
    </div>
  );
};

export default SearchBar;
