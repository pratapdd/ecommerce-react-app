import React from 'react';
import Home from '../Home';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('<Home />', () => {

  it('render an home screen with message', () => {
    const screen = shallow(<Home />);
    expect(screen.find('h1').text()).toEqual("Ecommerce Customer Interface");

  });

})

