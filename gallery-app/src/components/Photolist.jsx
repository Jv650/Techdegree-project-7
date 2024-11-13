import React from "react";
import Photo from "./Photo"; //components


//A PhotoList component that will render all of your Photo components.
const Photolist = (props) => {
    const results = props.photos; //or data?
    let photos;
    if (results.length > 0) {
        photos = results.map((photo) => (
            <Photo url={photo.url} key={photo.id} />
          ));
        } else {
          //photos = < />; edit
        }
    
        return <ul className="photo-list">{photos.id}</ul>;
    }

export default Photolist;
