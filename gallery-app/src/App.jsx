//Access react functionalities
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import apiKey from "./config.js";

//App components
import Search from "./components/Search";
import Nav from "./components/Nav";
import Photolist from "./components/Photolist";
import NotFound from "./components/NotFound";

//App/parent component to render everything onto the browser
function App() {
  //setting default states to functional using useState
  const [photos, setPhotos] = useState([]); //sets variable photos to initial value of an empty array
  const [query, setQuery] = useState(); //sets search query variable to an empty state
  const [loading, setLoading] = useState(true); //sets loading variable to initial state of true - so loading will be yes/true its loading

  //fetching the data from the API using axios
  const fetchData = (searchText) => {
    //apply setLoading state to default true - it will load
    setLoading(true);

    let activeFetch = true;
    axios
      //promises
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchText}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        //this promise - responds with setting the photos if the activeFetch is true
        if (activeFetch) {
          setPhotos(response.data.photos.photo);
          console.log(response.data.photos.photo);
          //once it loads it changes to false
          setLoading(false);
        }
      })
      //this promsie - will catch en error if any and log an error to the console
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
    return () => {
      activeFetch = false;
    };
  };

  //useEffect is a hook that allows side effects to run in this case
  //useEffect is being used to trigger the fetchData(query) whenever the query value changes
  useEffect(() => {
    fetchData(query);
  }, [query]); //ensures effect only runs when needed (query changes)

  //Variable will handle any text inputted in the search field and will set the query
  const handleQueryChange = (searchText) => {
    setQuery(searchText);
  };

  //Will return whatever components and routes to the DOM html and will also allow for routing to specified paths
  return (
    <div className="container">
      <Search changeQuery={handleQueryChange} />
      <Nav />
      {loading ? <p>Loading...</p> : null}
      <Routes>
        <Route path="/" element={<Navigate to="cats" />} />
        <Route
          path="/cats"
          element={
            <Photolist
              changeQuery={handleQueryChange}
              photos={photos}
              title={query}
            />
          }
        />
        <Route
          path="/dogs"
          element={
            <Photolist
              changeQuery={handleQueryChange}
              photos={photos}
              title={query}
            />
          }
        />
        <Route
          path="/computers"
          element={
            <Photolist
              changeQuery={handleQueryChange}
              photos={photos}
              title={query}
            />
          }
        />
        <Route
          path="/search/:query"
          element={
            <Photolist
              photos={photos}
              changeQuery={handleQueryChange}
              title={query}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
