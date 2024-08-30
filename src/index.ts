interface LocalStorage <T> {
  set(value: T): void;
  get(): T | null;
  remove(): void;
}

let existsKey: string[] = [];

export function createLocalStorage<T>(key: string): LocalStorage<T> {
  if (existsKey.includes(key)) {
    throw new Error('Key already exists!');
  }
  existsKey.push(key);
  return {
    set(value: T) {
      localStorage.setItem(key, JSON.stringify(value));
    },
    get() {
       return JSON.parse(localStorage.getItem(key) || 'null');
    },
    remove() {
        localStorage.removeItem(key);
    }
  };
}

// 添加一个用于测试的函数来重置 existsKey
export function __resetExistsKey() {
  existsKey = [];
}
