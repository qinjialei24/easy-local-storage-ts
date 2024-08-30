import { afterEach } from 'vitest';

// 清理 localStorage
afterEach(() => {
  if (global.localStorage && typeof global.localStorage.clear === 'function') {
    global.localStorage.clear();
  }
});