import { mount } from 'enzyme';
import React from 'react';
import BookFilter from '../BooksFilter';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <BookFilter />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('add new book suie', () => {
  beforeEach(() => {
    wrapped.find('input').simulate('change', {
      target: { value: '' },
    });
    wrapped.update();
  });

  it('has a input area that user can type in', () => {
    expect(wrapped.find('input').prop('value')).toEqual(undefined);
  });

  it('has some input fileds', () => {
    expect(wrapped.find('input').length).toEqual(1);
  });

  it('has some form fileds', () => {
    expect(wrapped.find('form').length).toEqual(1);
  });
});
