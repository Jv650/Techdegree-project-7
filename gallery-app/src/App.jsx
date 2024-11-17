//Access react functionalities
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router-dom";

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

  const apiKey = "0729021a46f80230ae32d71d4a050501";

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
  //useEffect allows us to perform side effects, in this case fetch the data from the API
  useEffect(() => {
    //path variable is set to the location and the path name
    const path = location.pathname;
    //if the path & location are both equal to the route then they will render query photos
    if (path === "/cats") {
      fetchData("cats");
    } else if (path === "/dogs") {
      fetchData("dogs");
    } else if (path === "/computers") {
      fetchData("computers");
    } else if (path.startsWith("/search/")) {
      const query = path.replace("/search/", "");
      fetchData(query);
    }
    fetchData(query);
  }, [location.pathname]); //location.pathname

  //Variable will handle any text inputted in the search field and will set the query
  const handleQueryChange = (searchText) => {
    setQuery(searchText);
  };

  //Will return whatever components and routes to the DOM html and will also allow for routing to specified paths
  return (
    //element={<Navigate to='dogs'/> //data={} maybe add this inside the photolist element to specify cat, dog, comp
    <div className="container">
      <Search changeQuery={handleQueryChange} /> {/* <Search */}
      <Nav changeQuery={handleQueryChange} />
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
        {/*<Route path="/404" element={<Navigate replace to={<NotFound />} />} />*/}
      </Routes>
    </div>
  );
}

export default App;

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

/*import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

//App components
import apiKey from "./config";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Photolist from "./components/Photolist";
import NotFound from "./components/NotFound";

function App() {
  //const [count, setCount] = useState(0)
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState();
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const fetchData = (searchText) => {
    setLoading(true);
    let activeFetch = true;
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchText}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        if (activeFetch) {
          setPhotos(response.data.photos.photo); //maybe need to remove photos.photo?
          console.log(response.data.photos.photo);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
    return () => {
      activeFetch = false;
    };
  };

  /*useEffect(() => {
    fetchData(query); //query
  }, [query]); //[query]

  const handleQueryChange = (searchText) => {
    setQuery(searchText);
  };*/
/*
  useEffect(() => {
    const path = location.pathname;
    if (path === "/cats") {
      fetchData("cats");
    } else if (path === "/dogs") {
      fetchData("dogs");
    } else if (path === "/computers") {
      fetchData("computers");
    } else if (path.startsWith("/search/")) {
      const query = path.replace("/search/", "");
      fetchData(query);
    }
    fetchData(query);
  }, [location.pathname]);

  const handleQueryChange = (searchText) => {
    setQuery(searchText);
  };

  return (
    //element={<Navigate to='dogs'/> //data={} maybe add this inside the photolist element to specify cat, dog, comp
    <div className="container">
      <Search changeQuery={handleQueryChange} />
      <Nav changeQuery={handleQueryChange} />
      {/*{loading ? (
        <p>Loading...</p>
      ) : (
        <Photolist photos={photos} title={query} />
      )}*/ {
  /*
      <Routes>
        <Route path="/" element={fetchData} />
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
        <Route path="*" element={<Navigate replace to="/404" />} />
        <Route path="/404" element={<Navigate replace to={<NotFound />} />} />
      </Routes>
    </div>
  );
}

export default App;
*/
}
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
//<Route path="/404" element={<Navigate replace to={<NotFound />} />} />
