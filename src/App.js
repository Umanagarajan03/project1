// src/App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { myStore } from './redux/config';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFoundPage from './NotFoundPage';
import ErrorBoundary from './ErrorBoundary';
import Web1 from './Web1';
import './App.css';

// Define routes for the application
const routerPaths = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/Home', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/web1', element: <Web1 /> }, // Ensure this route is correct
  { path: '*', element: <NotFoundPage /> }, // Catch-all route for 404 errors
]);

function App() {
  return (
    <Provider store={myStore}>
      <ErrorBoundary>
        <RouterProvider router={routerPaths} />
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
