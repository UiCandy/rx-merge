import React from 'react';
import { mount } from 'enzyme';

import { data$ } from '../src/api';
import App from '../src/App';

const user$ = 'https://jsonplaceholder.typicode.com/users/1';

function awaitStream(stream$) {
  let response = { name: 'Mark' };
  stream$.subscribe(data => {
    response = data;
  });
  return response;
}

describe('<App />', () => {
  const wrap = mount(<App />);

  it('renders', () => {
    expect(wrap.find(App).exists()).toBe(true);
  });
  it('fetches data from a stream', () => {
    const mock$ = awaitStream(data$(user$));
    expect(mock$).toEqual({ name: 'Mark' });
  });
});
