import React from "react";
//import axios from "axios";


//A Photo component that will display an li and img element.
const Photo = ({photo}) => {
  return (
      <li>
        <img 
        src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`}
        alt={photo.title} 
        />
        <p>{photo.title}</p>
      </li>
    /*<li key={photo.id}>
      <img src={photo.url} title={photo.title} alt={photo.title} />
    </li>*/
  );
};
export default Photo;

//NOTE FOR MORNING: CONTINUE WORKING ON FIGURING OUT THE COMPONENTS
