// Imports necessary libraries
import React from 'react';
import {NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router';

const MainNav = (props) => {
  const navigate = useNavigate();

  // functions used to navigate user to new URL based on search/button clicked. 
  function handleClick(e){
    e.preventDefault();
    props.queryChange('pancakes')
    navigate("search/pancakes");  
  }

  function handleClick2(e){
    e.preventDefault();
    props.queryChange('waffles')
    navigate("search/waffles");  
  }

  function handleClick3(e){
    e.preventDefault();
    props.queryChange('syrup')
    navigate("search/syrup");  
  }

  // The buttons that component will render
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink onClick={handleClick} to="search/pancakes">Pancakes</NavLink></li>
        <li><NavLink onClick={handleClick2} to="search/waffles">Waffles</NavLink></li>
        <li><NavLink onClick={handleClick3} to="search/syrup">Syrup</NavLink></li>
      </ul>
    </nav>
  ); 
}
  
export default MainNav;
  