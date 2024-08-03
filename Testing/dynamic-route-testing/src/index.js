import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import WebDevelopement from "./Pages/Services/WebDevelopement"
import MobileAppDevelopement from "./Pages/Services/MobileAppDevelopement"
import DesktopAppDevelopement from "./Pages/Services/DesktopAppDevelopement"

const root = ReactDOM.createRoot(document.getElementById("root"));

let allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About-us",
    element: <About />,
  },
  {
    path: "/Services/*",
    element: <Services />,
    children:[
      {
        path: "WebDevelopement",
        element:<WebDevelopement />
      },
      {
        path: "MobileAppDevelopement",
        element:<MobileAppDevelopement />
      },
      {
        path: "DesktopAppDevelopement",
        element:<DesktopAppDevelopement />
      },
    ]
  },
  {
    path: "/Contact",
    element: <Contact />,
  },

]);
root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
