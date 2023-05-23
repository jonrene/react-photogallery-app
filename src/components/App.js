// Importing necessary libraries and React components 
import React, { useEffect, useState} from 'react';
import Home from './Home';
import PhotoGallery from './PhotoGallery';
import apiInfo from '../config';
import {Route, Routes} from 'react-router-dom';
import NotFound from './NotFound';
import NavSearch from './NavSearch';

// Main React Application component 
const App = () => {
  // states for the app to store photos received from the API and curret search by user
  const [photos, setPhotos] = useState([]);
  const [currentQuery, setcurrentQuery] = useState("");

  // Initializes inital search from user to "pancakes waffles syrup" (categories of main navigation buttons)
  useEffect(()=>{
    setcurrentQuery("pancakes%2Cwaffles%2syrup");
  },[])

  // Updates photo state of application when user enters a new search or clicks one of navigation search buttons
  useEffect(()=>{
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiInfo.key}&tags=${currentQuery}&per_page=48&format=json&nojsoncallback=1&safe_search=3`)
      .then(response => response.json())
      .then(json => {
        return json.photos.photo
      })
      .then(jsonPhotos=>{setPhotos(jsonPhotos)})
      
  },[currentQuery])

  
  // components that application will render based on URL/Route
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavSearch queryChange={setcurrentQuery}/>}> 
          <Route index element={<Home photos={photos}/>}/>
          <Route path="search/:query" element={<PhotoGallery queryChange={setcurrentQuery} photos={photos} />}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  )
  
}

export default App;
