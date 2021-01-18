import React from 'react';
import { shallow, mount} from 'enzyme';

describe('DogSearch', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<DogSearch />));

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  });
  
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should have initial state', () => {
    expect(wrapper.instance().state.breeds).toEqual([]);
    expect(wrapper.instance().state.numberOfDogs).toEqual(0);
    expect(wrapper.instance().state.breedName).toEqual("");
  });

  it('should capitalize breed names', () =>{
    expect(wrapper.instance().capitalize('african')).toEqual('African');
  });
});
