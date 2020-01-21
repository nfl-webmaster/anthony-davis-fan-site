import React from 'react';
import { shallow } from 'enzyme';

import Statistics from '../index';

describe('<Statistics />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<Statistics />);
    expect(renderedComponent.contains(<h1>Statistics </h1>)).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<Statistics />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
