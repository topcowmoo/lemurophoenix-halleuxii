// Importing the function to define configuration from the Vite library
import { defineConfig } from "vite";
// Importing the React plugin provided by Vite which handles Babel and other configurations
import react from "@vitejs/plugin-react";

// Exporting the configuration as a default export. This configuration is read by Vite.
export default defineConfig({
  // Array of plugins used in the build process. Here, we include the React plugin,
  // which sets up React Fast Refresh and other optimizations.
  plugins: [react()],
  
  // Configuration options for the development server
  server: {
    port: 3000, // Specifies the port on which the dev server will run
    open: true, // Automatically opens the app in your default browser when you start the server
  },
});