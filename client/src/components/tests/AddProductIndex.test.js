import React from 'react';
import AddProductIndex from '../AddProductIndex';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('<AddProductIndex />', () => {

  it('render an add product screen with message', () => {
    const screen = shallow(<AddProductIndex />);
    expect(screen.find('h1').text()).toEqual("Admin Customer Interface");
  });

})

