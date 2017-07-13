import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import ppHOC from './hoc';
import { CounterContainer } from '../../containers/counter';

const TestCounterContainer = ppHOC(CounterContainer);

describe('A suite', () => {
  it('渲染的组件有四个按钮', () => {
    expect(mount(<TestCounterContainer />).find('button')).to.have.length(4);
  });
});
