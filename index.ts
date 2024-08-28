interface LocalStorage {
  set(value: string): void;
  get(): string | null;
  remove(): void;
}


export function createLocalStorage(key: string): LocalStorage {
  return {
    set(value: string) {
    },
    get() {
      return null;
    },
    remove() {
    }
  };

}