import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App';

// Root container where the tree will be rendered.
const root = createRoot(
    document.getElementById('root')
);  // Updated function usage

// Render the App component into the root container.
root.render(
    < App />
);