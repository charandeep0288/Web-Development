// import logo from './logo.svg';
// import './App.css';

import React from "react"; 

import Navbar from "./Navbar";
import Category from "./Category";
import Search from "./Search";
import Table from "./Table";

function App(props) {
  return (
    // <React.Fragment>=> empty contanier hai bass (job humna ik se jada component ko render karna hoo tho kam ata hai)
    <React.Fragment>

      <Navbar />

      <div className="row">
        <div className="col-4 p-4">
          <Category />
        </div>

        <div className="col-10 p-4">
          <div className="row">
              <Search />
              <Table />
          </div>
        </div>

      </div>

    </React.Fragment>
  );
}

export default App;
