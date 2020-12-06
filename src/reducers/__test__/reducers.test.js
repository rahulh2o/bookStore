import { bindActionCreators } from 'redux';
import reducer from '../bookReducer';

describe('book reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });
});
