import * as React from "react";
import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Error from "../components/Error";
export default createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {index:true , element: <div>Index pages</div>},
        {
            path: 'link',
            element: <div>Link</div>
        },
        {
            path: 'contact',
            element: <div>Contect</div>
        },
      ]
    },
  ]);