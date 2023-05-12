import React, { useRef, useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { retrievePersonSkills } from '../../redux/people/people';
import { MdPersonSearch } from 'react-icons/md';
import Icon from './Icon';
import Label from './Label';
import Input from './Input';
import { classNames } from '../../utils';

const onFocusLabelStyle =
  'px-1 top-0 left-6 text-sm bg-[#27292d] text-[#cddc39]';
const onFocusInputStyle = 'border-[#cddc39]';

const SearchBar = () => {
  const [isFocus, setFocus] = useState(false);
  const dispatch = useAppDispatch();
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const formData = new FormData(formRef.current!);
    const data = Object.fromEntries(formData);
    const { name } = data;
    dispatch(retrievePersonSkills(name as string));
  };

  const handleFocus = () => {
    setFocus(true);
  };

  return (
    <div className="relative">
      <form action="" className="" onSubmit={handleSubmit} ref={formRef}>
        <div className="w-full relative">
          <Icon>
            <MdPersonSearch />
          </Icon>
          <Label
            htmlFor="name"
            className={classNames(isFocus && onFocusLabelStyle)}
          >
            Search skills by people name
          </Label>
          <Input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            placeholder="Search skills by people name"
            className={classNames(isFocus && onFocusInputStyle)}
            onFocus={handleFocus}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
