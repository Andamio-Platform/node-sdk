// src/__tests__/index.test.ts
import { MathSDK } from '../index';

describe('MathSDK', () => {
  let sdk: MathSDK;

  beforeEach(() => {
    sdk = new MathSDK();
  });

  describe('add', () => {
    it('adds two positive numbers correctly', () => {
      expect(sdk.add(2, 3)).toBe(5);
    });

    it('handles negative numbers', () => {
      expect(sdk.add(-2, 3)).toBe(1);
      expect(sdk.add(2, -3)).toBe(-1);
      expect(sdk.add(-2, -3)).toBe(-5);
    });

    it('handles zero', () => {
      expect(sdk.add(0, 3)).toBe(3);
      expect(sdk.add(2, 0)).toBe(2);
    });
  });
});