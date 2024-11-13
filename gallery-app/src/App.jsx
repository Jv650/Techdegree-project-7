import React, { useState /*useEffect*/ } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

//App components
import Search from "./components/Search";
import Nav from "./components/Nav";
import Photolist from './components/Photolist';
/*import Photolist from "./components/Photolist";
import Photo from "./components/Photo";
*/

function App() {
  const [count, setCount] = useState(0)
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("cats");

const fetchData = async(query) => {
  try {
    const myApiKey = "0729021a46f80230ae32d71d4a050501";

    //Api url
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0729021a46f80230ae32d71d4a050501&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
    
    //make fetch request
    const response = await fetch(url);
    
    //check if response is successful
    if(!response.ok) {
      throw new Error("Response ok");
    }

    //parse and return the JSON data
    const result = await response.json();
    return result.photos.photo;
  } catch (error) {
    console.error("Error fetching and parsing data:", error);

    //return null if theres an error
    return null; 
  }
};


  /*useEffect(() => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0729021a46f80230ae32d71d4a050501&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => setPhotos(responseData.photos)) //data??
    .catch(error => console.log("Error fetching and parsing data", error));

  }, [query]);*/


  return ( //data={} maybe add this inside the photolist element to specify cat, dog, comp
      
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Nav />} />
      <Route path="cats" element={<Photolist />} />
      <Route path="dogs" element={<Photolist />} />
      <Route path="computers" element={<Photolist />} />
      <Route path="/search/:query" element={<Photolist />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
