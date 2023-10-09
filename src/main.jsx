import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Service from './pages/Service';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './privateroute/PrivateRoute';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/service/:id",
        element: <PrivateRoute><Service></Service></PrivateRoute> ,
        loader: () => fetch('/data.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/faq",
        element: <PrivateRoute><FAQ></FAQ></PrivateRoute>
      },
      
      
 
 
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
