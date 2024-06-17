/**
 * Tailwind CSS configuration file that defines all the styles
 * and customizations used throughout the project.
 * 
 * The @type {import('tailwindcss').Config} is a TypeScript JSDoc comment
 * used for type-checking and providing better autocompletion in supported editors.
 */
export default {
  // Specifies the paths to all template files in your project.
  // Tailwind will scan these files for class names and build all the styles needed for those classes.
  content: [
    "./index.html", // Path to your HTML file.
    "./src/**/*.{js,ts,jsx,tsx}" // Glob pattern matching all JavaScript/TypeScript files in your src directory.
  ],
  
  // The `theme` section allows you to define custom values for colors, fonts, sizes, etc.,
  // or extend the existing Tailwind theme to include your custom styles.
  theme: {
    extend: {
      // Custom font family configuration
      fontFamily: {
        cursive: ["Kalam", "cursive"], // Defines a custom font named 'cursive' using the 'Kalam' font with fallback to generic 'cursive'.
      },
    },
  },
  
  // The `plugins` array can include any number of Tailwind plugins
  // that you want to use to extend Tailwind with additional utilities, components, or base styles.
  plugins: [],
};