import React from 'react';
import SearchBar from '../components/search';
import { Avatar } from '../components/avatar';

const Home = () => {
  return (
    <div>
      <section>
        <SearchBar></SearchBar>
      </section>
      <section className="flex flex-col gap-2 items-center justify-center p-14">
        <Avatar></Avatar>
        <h1>Adel Guitoun</h1>
      </section>
    </div>
  );
};

export default Home;
