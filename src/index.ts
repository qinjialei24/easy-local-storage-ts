interface LocalStorage {
  set(value: string): void;
  get(): string | null;
  remove(): void;
}

export function createLocalStorage(key: string): LocalStorage {
  return {
    set(value: string) {
      localStorage.setItem(key, value);
    },
    get() {
       return localStorage.getItem(key);
    },
    remove() {
        localStorage.removeItem(key);
    }
  };
}
