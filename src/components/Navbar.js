import React, { useState } from 'react';
import AddNewBook from './AddNewBook';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const buttonHandler = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <div className='navbar'>
      <h1>Books</h1>

      <button className='btn btn-danger btn-sm' onClick={buttonHandler}>
        Create New Book
      </button>
      <AddNewBook show={show} setShow={setShow} />
    </div>
  );
};

export default Navbar;
