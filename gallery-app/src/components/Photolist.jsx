import React from "react";
import Photo from "./Photo"; //components
import NotFound from "./NotFound";

//A PhotoList component that will render all Photo components.
const Photolist = ({ photos, title }) => {
  //const results = props.photos; //photos.photo; //destructuring
  let photoElement;
  if (photos.length > 0) {
    photoElement = photos.map((photo) => (
      <Photo
        key={photo.id}
        photos={photo}
        title={photo.title}
        url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} //or just photo={photo}
      />
    ));
  } else {
    photoElement = <NotFound />;
  }

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
