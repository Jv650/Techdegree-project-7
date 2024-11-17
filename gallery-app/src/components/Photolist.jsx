import React from "react";
import Photo from "./Photo"; //components
import NotFound from "./NotFound";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

//A PhotoList component that will render list of photos
const Photolist = ({ photos, title }) => {
  const location = useLocation();
  let photoElement;
  useEffect(() => {
    const currentPath = location.pathname;
    console.log("Path changed to:", currentPath);
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

//key={photos.photo.id} url={`https://live.staticflickr.com/${server-id}/${id}_${secret}.jpg`}

/*const Photolist = ({photos}) => {
    function
        props.map((photo) => (
            <Photo url={photo.images.fixed_height.url} key={photo.id}/>
          ));
         //else {
          //photos = < />; edit
        //}
    
        return <ul className="photo-container">{photos}</ul>;
    }*/

/*function Photolist({ photos }) {
  return (
    <ul className="photo-container">
      {photos.map((photo) => (
        <Photo key={photo.id} photo={photo} />
      ))}
    </ul>
  );
}*/
