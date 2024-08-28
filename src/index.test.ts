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
    expect(localStorage.get()).toBe("testValue");
  });

  it('should return null for non-existent key', () => {
    expect(localStorage.get()).toBeNull();
  });

  it('should remove a value', () => {
    localStorage.set(testValue);
    localStorage.remove();
    expect(localStorage.get()).toBeNull();
  });

  it('should set and get a value with string types', () => {
    const stringStorage = createLocalStorage<string>('stringKey');
    stringStorage.set("foo");
    expect(stringStorage.get()).toBe("foo");
  });

  it('should set and get a value with number types', () => {
    const numberStorage = createLocalStorage<number>('numberKey');
    numberStorage.set(123);
    expect(numberStorage.get()).toBe(123);
  });

  it('should set and get a value with object types', () => {
    const objectStorage = createLocalStorage<{ name: string }>('objectKey');
    objectStorage.set({ name: 'John' });    
    expect(objectStorage.get()).toEqual({ name: 'John' });
  });

  it('should set and get a value with array types', () => {
    const arrayStorage = createLocalStorage<number[]>('arrayKey');
    arrayStorage.set([1, 2, 3]);
    expect(arrayStorage.get()).toEqual([1, 2, 3]);
  });
  
});