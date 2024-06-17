// Import React library to use JSX syntax and React features.
import React from 'react'
// Import ReactDOM's client-specific methods for rendering React components.
import ReactDOM from 'react-dom/client'
// Import the App component, which serves as the entry point of the React application.
import App from './App.jsx'
// Import the main CSS file to style the entire application.
import './index.css'

// Select the root DOM element where the React app will be mounted.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped in React.StrictMode.
// React.StrictMode does not render any visual UI but provides additional checks and warnings in development.
root.render(
  <React.StrictMode>
    {/* App component is the root component of your React application hierarchy. */}
    <App />
  </React.StrictMode>,
);