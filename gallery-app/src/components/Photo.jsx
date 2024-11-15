import React from "react";
//import axios from "axios";
//import { useParams } from "react-router-dom";

//A Photo component that will display an li and img element.
const Photo = ({ title, url, id }) => {
  return (
    <li>
      <img
        src={url} //url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} //_q //or index url
        title={title}
        key={id}
        //photo={photo}
        //url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
      />
      <p>{title}</p>
    </li>
    /*<li key={photo.id}>
      <img src={photo.url} title={photo.title} alt={photo.title} />
    </li>*/
  );
};

export default Photo;

//NOTE FOR MORNING: CONTINUE WORKING ON FIGURING OUT THE COMPONENTS
