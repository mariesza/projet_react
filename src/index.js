//importation des bibliothèques
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//importation des fichiers
import ErrorPage from "./components/ErrorPage";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PageAccueil from './components/PageAccueil';
import MonCompte from './components/MonCompte.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth/signup",
    element: <Signup />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth/mon-compte",
    element: <MonCompte />,
    errorElement: <ErrorPage />,
  },
{ path : '/auth/signin',
  element: <Signin />,
  errorElement: <ErrorPage />,
}
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();