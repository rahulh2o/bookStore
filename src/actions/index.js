import axios from 'axios';

export const getBookData = () => async (dispatch) => {
  let res = await axios.get(
    'https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep'
  );

  dispatch({
    type: 'GET_BOOK',
    payload: res,
  });
};

export const filterBooks = (text) => {
  return {
    type: 'FILTER_BOOKS',
    payload: text,
  };
};

export const clearFilter = () => {
  return {
    type: 'CLEAR_FILTER',
  };
};

export const addBook = (data) => {
  return {
    type: 'ADD_BOOK',
    data,
  };
};
