import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import DogContainer from './components/dog-container/DogContainer';

describe('App', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<App />));

 it('should render the DogContainer Component', () => {
    expect(wrapper.containsMatchingElement(<DogContainer/>)).toEqual(true);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  });
});