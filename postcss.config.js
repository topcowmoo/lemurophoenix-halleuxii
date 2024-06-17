/**
 * Configuration object for PostCSS.
 * 
 * PostCSS is a tool for transforming CSS with JavaScript plugins.
 * This configuration specifies which plugins to use during the CSS build process.
 * 
 * Exporting this configuration as the default export of this module allows build tools
 * like Vite, Webpack, or others that utilize PostCSS to apply these configurations
 * during the build or development process.
 */
export default {
  // 'plugins' object contains configurations for all PostCSS plugins used in this project.
  plugins: {
    // 'tailwindcss': Adds Tailwind CSS as a PostCSS plugin. This allows the use of Tailwind utility classes
    // within your CSS or HTML files. The empty object `{}` means that it uses the default configuration
    // specified in Tailwind's configuration file (typically tailwind.config.js).
    tailwindcss: {},

    // 'autoprefixer': This plugin automatically adds vendor prefixes to CSS rules. This is necessary
    // to ensure CSS compatibility across different browsers. The empty object `{}` indicates that
    // autoprefixer should use its default settings, which are generally suitable for most projects.
    autoprefixer: {},
  }
};