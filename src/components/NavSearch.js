// imports necessary libraries
import MainNav from "./MainNav";
import SearchForm from "./SearchForm";
import React from "react";
import {Outlet} from 'react-router-dom';

// Component that combines SearchForm component and MainNav component into one shared compoenent
const NavSearch = (props) => {
  return (
    <div>
        <SearchForm queryChange={props.queryChange}/>
        <MainNav queryChange={props.queryChange}/>
        <Outlet />
    </div>
  );
}
  
export default NavSearch;
  