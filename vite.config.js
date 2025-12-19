import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // If React; install with: npm install -D @vitejs/plugin-react
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});