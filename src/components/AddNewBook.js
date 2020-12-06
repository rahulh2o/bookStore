import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './AddNewBook.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../actions';

const AddNewBook = (props) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    publisher: '',
    publishedDate: '',
  });

  const { title, authors, publisher, publishedDate } = formData;
  if (!props.show) {
    return null;
  }

  const closeHandler = (e) => {
    e.preventDefault();
    props.setShow(false);
  };

  const changeHandler = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let obj = {
      id: Math.random(),
      volumeInfo: formData,
    };
    dispatch(addBook(obj));
    props.setShow(false);
  };

  return ReactDOM.createPortal(
    <div className='modal-container' id='modal'>
      <div className='modal'>
        <button className='close-btn' id='close' onClick={closeHandler}>
          <i className='fa fa-times'></i>
        </button>
        <div className='modal-header'>
          <h3>Add New Book</h3>
        </div>
        <div className='modal-content'>
          <p>Please fill the entries for adding a book</p>
          <form className='modal-form'>
            <div>
              <label htmlFor='name'>Title</label>
              <input
                type='text'
                placeholder='Enter name'
                className='form-input'
                value={title}
                name='title'
                onChange={changeHandler}
              />
            </div>
            <div>
              <label htmlFor='Author'>Author</label>
              <input
                type='text'
                placeholder='Enter Author'
                className='form-input'
                value={authors}
                name='authors'
                onChange={changeHandler}
              />
            </div>
            <div>
              <label htmlFor='Publisher'>Publisher</label>
              <input
                type='text'
                placeholder='Enter Publisher'
                className='form-input'
                value={publisher}
                name='publisher'
                onChange={changeHandler}
              />
            </div>
            <div>
              <label htmlFor='date'>Publish Date</label>
              <input
                type='date'
                placeholder='Enter Publish date'
                className='form-input'
                value={publishedDate}
                name='publishedDate'
                onChange={changeHandler}
              />
            </div>
            <input
              type='submit'
              value='Submit'
              className='submit-btn'
              onClick={submitHandler}
            />
          </form>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default AddNewBook;
