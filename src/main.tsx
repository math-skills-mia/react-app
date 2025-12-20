import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

// This means ReactDOM is displaying this component tree inside an element with the ID of root
// We could also use the library React Native instead of library React Dom
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode> {/* Used to identify potential problems */} 
    <App />
  </React.StrictMode>,
)

// A library provides specific functions
// A framework is a set of tools and guidelines for building apps

/* React is a library for building UIs (user interfaces)
We need additional third-party libraries for:
Routing (allows user to go from one page to another),
making HTTP calls, managing app state, internationalization, form validation, animations.
*/