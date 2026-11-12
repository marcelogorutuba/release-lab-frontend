import { describe, expect, it } from 'vitest';

describe('lab probe', () => {
  it('a new spec outside the CI list must run', () => {
    expect(1).toBe(2);
  });
});
