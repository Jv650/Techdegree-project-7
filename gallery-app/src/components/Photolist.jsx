/* eslint-disable react/prop-types */
import Photo from "./Photo"; //components
import NotFound from "./NotFound";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

//A PhotoList component that will render list of photos
const Photolist = ({ photos, title, changeQuery }) => {
  const location = useLocation();
  let photoElement;
  //useEffect allows us to perform side effects, in this case it will allow us to change location based on nav button clicked
  useEffect(() => {
    //path variable is set to the location and the path name
    const path = location.pathname;
    //if the path & location are both equal to the route then they will render query photos
    if (path === "/cats") {
      changeQuery("cats");
    } else if (path === "/dogs") {
      changeQuery("dogs");
    } else if (path === "/computers") {
      changeQuery("computers");
    } else if (path.startsWith("/search/")) {
      const query = path.replace("/search/", "");
      changeQuery(query);
    }
  }, [location.pathname]);

  //if photos.length is greater than 0 it will map a photo from the Photo components including the key, photos, title, url
  if (photos.length > 0) {
    photoElement = photos.map((photo) => (
      <Photo
        key={photo.id}
        photos={photo}
        title={title}
        url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} //or just photo={photo}
      />
    ));
  } else {
    photoElement = <NotFound />;
  }

  //return the html to the DOM
  return (
    <div className="photo-container">
      <h2>{title}</h2>
      <ul>{photoElement}</ul>
    </div>
  );
};

export default Photolist;
