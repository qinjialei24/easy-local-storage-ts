import { describe, it, expect, beforeEach } from 'vitest';
import { createLocalStorage } from './index';

describe('createLocalStorage', () => {
  const testKey = 'testKey';
  const testValue = 'testValue';
  let localStorage: ReturnType<typeof createLocalStorage>;

  beforeEach(() => {
    localStorage = createLocalStorage(testKey);
  });

  it('should set and get a value', () => {
    localStorage.set(testValue);
    expect(localStorage.get()).toBe(testValue);
  });

  it('should return null for non-existent key', () => {
    expect(localStorage.get()).toBeNull();
  });

  it('should remove a value', () => {
    localStorage.set(testValue);
    localStorage.remove();
    expect(localStorage.get()).toBeNull();
  });
});