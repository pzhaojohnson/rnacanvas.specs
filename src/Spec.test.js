import { Spec } from './Spec';

describe('`class Spec`', () => {
  test('`constructor()`', () => {
    expect(() => new Spec({})).not.toThrow();

    expect(() => new Spec()).toThrow();
    expect(() => new Spec(null)).toThrow();
    expect(() => new Spec(2)).toThrow();
    expect(() => new Spec('asdf')).toThrow();
  });
});
