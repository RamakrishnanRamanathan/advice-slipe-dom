import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: '/advice-slipe-dom/',
     build: {
    target: "es2022"
  },
  esbuild: {
    target: "es2022"
  },
  optimizeDeps:{
    esbuildOptions: {
      target: "es2022",
    }
  }
 
});
