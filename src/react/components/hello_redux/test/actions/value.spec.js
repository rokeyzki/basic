import { expect } from 'chai';
import action from '../../actions/value';

describe('actions', () => {
  it('action 的 type 应该是 INCREASE', () => {
    expect(action.increase().type).to.be.equal('INCREASE');
  });
});
