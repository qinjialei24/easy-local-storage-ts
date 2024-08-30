interface LocalStorage <T> {
  set(value: T): void;
  get(): T | null;
  remove(): void;
}

export function createLocalStorage<T>(key: string): LocalStorage<T> {
  const existsKey: string[] = [];
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
