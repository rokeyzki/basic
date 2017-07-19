import { expect } from 'chai';
import action from '../../actions/value';

describe('actions test', () => {
  it('action 的 type 应该是 INCREASE', () => {
    expect(action.increase().type).to.be.equal('INCREASE');
  });
});
