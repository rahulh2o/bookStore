import React, { useEffect } from 'react';
import { getBookData } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import Bookcards from './Bookcards';
import BooksFilter from './BooksFilter';

const BookDetails = (props) => {
  const dispatch = useDispatch();

  const bookDetails = useSelector((state) => state.bookData);
  const { filtered } = bookDetails;

  useEffect(() => {
    dispatch(getBookData());
  }, []);

  return (
    <>
      <BooksFilter />
      <div className='adjust-text'> All books</div>

      <div className='grid-2'>
        {filtered &&
          filtered.data.items.map((item) => (
            <Bookcards key={item.id} data={item.volumeInfo} />
          ))}
      </div>
    </>
  );
};

export default BookDetails;
