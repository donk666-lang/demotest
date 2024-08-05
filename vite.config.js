import {
  defineConfig
} from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const baseUrl = {
  development: './',
  production: '/'
};

export default ({
  mode
}) => defineConfig({
  plugins: [vue()],
  base: baseUrl[mode],

  // 这里是将src目录配置别名为 @ 方便在项目中导入src目录下的文件
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, 'src')
    }
  },

  // 打包配置
  build: {
    target: 'modules',
    outDir: 'dist', //指定输出路径
    assetsDir: 'assets', // 指定生成静态资源的存放路径
    chunkSizeWarningLimit: 1500 // 加大包限制的大小
  },

  // 本地运行配置，及反向代理配置
  server: {
    host: "0.0.0.0",
    port: '3000'
  }
});