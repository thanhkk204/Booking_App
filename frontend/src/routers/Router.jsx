import * as React from "react";
import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Error from "../components/Error";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import Doctors from "../pages/doctors/Doctors";
import DoctorDetail from "../pages/doctors/DoctorDetail";
import Login from "../pages/Login";
export default createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {index:true , element: <Home/>},
        {
            path: '/',
            element: <Home/>
        },
        {
            path: 'signup',
            element: <Signup />
        },
        {
            path: 'services',
            element: <Service />
        },
        {
            path: 'contacts',
            element: <Contact/>
        },
        {
            path: 'doctors',
            element: <Doctors/>
        },
        {
            path: 'doctors/:id',
            element: <DoctorDetail/>
        },
        {
            path: 'login',
            element: <Login/>
        },
      ]
    },
  ]);