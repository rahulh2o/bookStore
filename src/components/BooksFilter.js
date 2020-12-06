import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { filterBooks, clearFilter } from '../actions';

const BooksFilter = () => {
  const text = useRef('');
  const dispatch = useDispatch();

  const onChange = (e) => {
    if (text.current.value !== '') {
      dispatch(filterBooks(e.target.value));
    } else {
      dispatch(clearFilter());
    }
  };

  return (
    <form>
      <input
        className='myInput'
        ref={text}
        type='text'
        placeholder='Search...'
        onChange={onChange}
      />
    </form>
  );
};

export default BooksFilter;
