import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Components/Main';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Components/Provider/AuthProvider';
import Orderlist from './Components/OrderList/Orderlist';
import PriveatRoutes from './PriveatRoutes/PriveatRoutes';
import Profile from './Components/Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "orderlist",
        element: (
          <PriveatRoutes>
            <Orderlist></Orderlist>
          </PriveatRoutes>
        ),
      },
      {
        path:'/proflie',
        element:<PriveatRoutes>
          <Profile></Profile>
        </PriveatRoutes>
      }
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
