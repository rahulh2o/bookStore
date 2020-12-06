import React from 'react';

const Bookcards = ({ data }) => {
  const { title, publisher, publishedDate, authors } = data;
  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>{title} </h3>
      <ul className='list'>
        {authors && <li>Author: {authors[0]}</li>}
        {publisher && <li>publisher: {publisher}</li>}
        {publishedDate && <li>publishedDate: {publishedDate}</li>}
      </ul>
    </div>
  );
};

export default Bookcards;
