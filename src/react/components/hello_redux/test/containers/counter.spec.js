import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ppHOC from './hoc';
import { CounterContainer } from '../../containers/counter';

const TestCounterContainer = ppHOC(CounterContainer);

describe('A suite', () => {
  it('容器组件测试', () => {
    expect(shallow(<TestCounterContainer />).is('div')).to.equal(false);
  });
});
