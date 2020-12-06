import * as actions from '../index';

describe('actions', () => {
  it('should create an action to filter books', () => {
    const text = 'Act';
    const expectedAction = {
      type: 'FILTER_BOOKS',
      payload: text,
    };
    expect(actions.filterBooks(text)).toEqual(expectedAction);
  });

  it('should clear the filtered books', () => {
    const expectedAction = {
      type: 'CLEAR_FILTER',
    };
    expect(actions.clearFilter()).toEqual(expectedAction);
  });

  it('should create an action to add books', () => {
    const data = {
      title: 'MyBook',
    };
    const expectedAction = {
      type: 'ADD_BOOK',
      data: data,
    };
    expect(actions.addBook(data)).toEqual(expectedAction);
  });
});
