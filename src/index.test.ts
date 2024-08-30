import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { createLocalStorage, __resetExistsKey } from './index';

describe('createLocalStorage', () => {
  const testKey = 'testKey';
  const testValue = 'testValue';
  let localStorage: ReturnType<typeof createLocalStorage>;
  let mockStorage: Record<string, string>;

  beforeEach(() => {
    mockStorage = {};
    global.localStorage = {
      getItem: vi.fn((key: string) => mockStorage[key] || null),
      setItem: vi.fn((key: string, value: string) => { mockStorage[key] = value; }),
      removeItem: vi.fn((key: string) => { delete mockStorage[key]; }),
      clear: vi.fn(() => { mockStorage = {}; }),
    } as any;

    __resetExistsKey(); // 重置 existsKey 数组
    localStorage = createLocalStorage(testKey);
  });

  afterEach(() => {
    vi.restoreAllMocks();
    global.localStorage.clear();
  });

  it('should throw an error when key already exists', () => {
    expect(() => createLocalStorage(testKey)).toThrow('Key already exists!');
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