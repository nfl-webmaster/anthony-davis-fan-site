import React from 'react';
import { shallow } from 'enzyme';

import About from '../index';

describe('<About />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<About />);
    expect(renderedComponent.contains(<h1>About</h1>)).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<About />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
