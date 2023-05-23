// imports react
import React from 'react';

// Not found component. in case user searches something that returns no results
const NotFound = () =>  {
  return (
    <li className="not-found">
        <h3>No Results Found</h3>
        <p>Your search did not return any results. Please try again.</p>
    </li>
  );
}
  
export default NotFound;
  