import { mount } from 'enzyme';
import React from 'react';
import NavBar from '../Navbar';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <NavBar />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('check for Navbar', () => {
  it('should have a button to create new book', () => {
    expect(wrapped.find('button').length).toEqual(1);
  });
});
