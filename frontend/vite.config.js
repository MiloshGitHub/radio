import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true, // important for Docker access
    port: 80,
    strictPort: true, // fail if port is already in use
    allowedHosts: ['frontend']
  },
});
