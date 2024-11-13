import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router-dom";


//App components
import Search from "./components/Search";
import Nav from "./components/Nav";
import Photolist from './components/Photolist';
import Photo from "./components/Photo";

function App() {
  //const [count, setCount] = useState(0)
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("dogs");
  const [loading, setLoading] = useState(true);

  const apiKey = "0729021a46f80230ae32d71d4a050501";

useEffect(() => {
  setLoading(true);
  let activeFetch = true;
  axios 
    .get(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0729021a46f80230ae32d71d4a050501&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
    .then((response) => {
      if (activeFetch) {
        setPhotos(response.data.data); //pay need to change to photos.photo
        setLoading(false);
      }
    })
    .catch((error) => {
      console.log("Error fetching and parsing data", error);
    });
    return () => {
      activeFetch= false;
    };
}, [query]);

const handleQueryChange = (searchText) => {
  setQuery(searchText);
};



/*const fetchData = async(query) => {
    //Api url
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0729021a46f80230ae32d71d4a050501&tags=${query}&per_page=24&format=json&nojsoncallback=1`; 

  try {
    //make fetch request
    const response = await fetch(url);
    //parse and return the JSON data
    const responseData = await response.json();
    console.log(responseData);
    //check if photos exist before setting state
    if(response.photos) {
      setPhotos(responseData.photos.photo);
    } else {
      console.error("Unexpected response:", responseData)
    }
  } catch (error) {
    console.error("Error fetching and parsing data", error);
  }
};

useEffect(() => {
  fetchData(query);
}, [query]);*/

/* 
    useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(responseData => setPhotos(responseData.photos)) //data??
    .catch(error => console.log("Error fetching and parsing data", error));

  }, [query]);
*/



  return ( //element={<Navigate to='dogs'/> //data={} maybe add this inside the photolist element to specify cat, dog, comp
  <>
    <Search changeQuery={handleQueryChange}/>
    <Routes>
    <Route path="/" element={<main/>}/>
    <Route path="cats" element={<Photolist photos={photos} />} />
    <Route path="dogs" element={<Photolist photos={photos}/>} />
    <Route path="computers" element={<Photolist photos={photos} />} />
    <Route path="/search/:query" element={<Photolist photos={photos}/>} />
    </Routes>
    <Nav />
  </>
  )
}

export default App
