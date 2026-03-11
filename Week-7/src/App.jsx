import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.jsx";
import ProductsPage from "./pages/products.jsx";
import TaskManager from "./pages/TaskManager.jsx";
import CountryExplorer from "./pages/CountryExplorer.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <ProductsPage /> },
  { path: "/taskmanager", element: <TaskManager /> },
  { path: "/countryexplorer", element: <CountryExplorer /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
