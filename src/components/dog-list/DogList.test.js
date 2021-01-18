import React from 'react';
import { shallow, mount} from 'enzyme';
import './DogList'

describe('DogList', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<DogList />));

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  });
  
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
