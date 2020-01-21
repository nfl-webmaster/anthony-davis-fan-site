import React from 'react';
import { shallow } from 'enzyme';

import Contact from '../index';

describe('<Contact />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<Contact />);
    expect(renderedComponent.contains(<h1>Contact </h1>)).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<Contact />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
