import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx'
import Login from './Authantication/Login.jsx'
import Register from './Authantication/Register.jsx'
import AuthProvider from './Authantication/Provider/AuthProvider.jsx'
import MyList from './Component/MyList/MyList.jsx'
import AllTouristsSpot from './Component/All Tourists Spot/AllTouristsSpot.jsx'
import AddTouristsSpot from './Component/Add Tourists Spot/AddTouristsSpot.jsx'
import DetailsView from './Component/All Tourists Spot/DetailsView.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        index: true,
        element: <App></App>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/mylist',
        element: <MyList></MyList>,
        loader: () => fetch(`http://localhost:5000/sportdata`)
      },
      {
        path: '/addsport',
        element: <AddTouristsSpot>  </AddTouristsSpot>
      },
      {
        path: '/allsport',
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: () => fetch('http://localhost:5000/sportdata')
      },
      {
        path: '/detailsview/:id',
        element: <DetailsView></DetailsView>,
        loader: ({ params }) => fetch(`http://localhost:5000/sportdata/${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
