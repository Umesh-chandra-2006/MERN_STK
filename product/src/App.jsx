import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductsPage from "./pages/products.jsx";
import TaskManager from "./pages/TaskManager.jsx";
import CountryExplorer from "./pages/CountryExplorer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/taskmanager" element={<TaskManager />} />
        <Route path="/countryexplorer" element={<CountryExplorer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
