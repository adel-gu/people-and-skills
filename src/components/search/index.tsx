import React, { useRef } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { retrievePersonSkills } from '../../redux/people/people';
import { MdPersonSearch } from 'react-icons/md';
import Icon from './Icon';
import Label from './Label';
import Input from './Input';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const formData = new FormData(formRef.current!);
    const data = Object.fromEntries(formData);
    const { name } = data;
    dispatch(retrievePersonSkills(name as string));
    console.log(name);
  };

  return (
    <div className="relative">
      <form action="" className="" onSubmit={handleSubmit} ref={formRef}>
        <div className="w-full relative">
          <Icon>
            <MdPersonSearch />
          </Icon>
          <Label htmlFor="name">Search skills by people name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            placeholder="Search skills by people name"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
