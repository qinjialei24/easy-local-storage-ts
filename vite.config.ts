import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // 如果你想保留 setup 文件，请确保路径正确
    // setupFiles: './vitest.setup.ts',
    // 如果你不需要 setup 文件，可以注释或删除这一行
  },
})