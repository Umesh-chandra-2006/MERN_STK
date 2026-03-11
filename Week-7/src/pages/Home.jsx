import React from "react";
import { Link } from "react-router";

function Home() {
  return (
    <div>
      <h1 className="text-3xl bg-black text-white font-bold text-center p-2 ">
        Product List
      </h1>
      <div className="bg-white flex flex-row  justify-center">
        <div className="bg-white border-2 border-gray-950 m-4 p-4">
          <p className="font-bold text-3xl mb-3">Phase 1: Products</p>
          <Link to="/products">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Products
            </button>
          </Link>
        </div>
        <div className="bg-white border-2 border-gray-950 m-4 p-4">
          <p className="font-bold text-3xl mb-3">Phase 2: Task Manager</p>
          <Link to="/taskmanager">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Task Manager
            </button>
          </Link>
        </div>
        <div className="bg-white border-2 border-gray-950 m-4 p-4">
          <p className="font-bold text-3xl mb-3">Phase 3: Country Explorer</p>
          <Link to="/countryexplorer">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Country Explorer
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
