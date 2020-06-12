import React, { useState } from 'react';

const Home = () => {
  
  const [query, setQuery] = useState('');

  return (
    <>
      <form>
        <input type='text' placeholder="Search by title" value={query} onChange={(event) => setQuery(event.target.value)} />
      </form>
    </>
  );
};



export default Home;
