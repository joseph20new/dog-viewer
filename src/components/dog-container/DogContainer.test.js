import React from 'react';
import { shallow, mount} from 'enzyme';
import DogSearch from '../dog-search/DogSearch';
import DogList from '../dog-list/DogList';

describe('DogConatiner', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<DogContainer />));

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  });
  
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the DogSearch Component', () => {
    expect(wrapper.containsMatchingElement(<DogSearch numberOfDogs={wrapper.instance().state.numberOfDogs} breeds={wrapper.instance().state.numberOfDogs}/>)).toEqual(true);
  });

  it('should render the DogList Component', () => {
    expect(wrapper.containsMatchingElement(<DogList/>)).toEqual(true);
  });

  it('should have initial state', () => {
    expect(wrapper.instance().state.breeds).toEqual([]);
    expect(wrapper.instance().state.numberOfDogs).toEqual(0);
    expect(wrapper.instance().state.hasErrors).toEqual(false);
  });
});
