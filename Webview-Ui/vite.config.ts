import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => {
  const port = 5174

  return {
    plugins: [react(), tailwindcss()],
    server: command === "serve" ? {
      port,
      strictPort: true,
      // wide-open CORS (dev-only)
      cors: { origin: "*" },
      headers: { "Access-Control-Allow-Origin": "*" }
    } : undefined,
    build: {
      assetsInlineLimit: 10000,
    }
  };
});