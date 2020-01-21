import React from 'react';
import { shallow } from 'enzyme';

import Forums from '../index';

describe('<Forums />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<Forums />);
    expect(renderedComponent.contains(<h1>Forums </h1>)).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<Forums />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
