
import App from './App.jsx'
import './index.css'
import Portal1 from './Portal1.jsx';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path:"/Portal1",
    Component:Portal1
  },
  {
    path:"/Portal2",
    Component:Portal1
  },
  {
    path:"/Portal3",
    Component:Portal1
  },
  {
    path:"/Portal4",
    Component:Portal1
  },
  {
    path:"/Portal5",
    Component:Portal1
  },
  {
    path:"/Portal6",
    Component:Portal1
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
