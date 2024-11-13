import React from "react";
import Photo from "./Photo"; //components


//A PhotoList component that will render all of your Photo components.
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


function Photolist({ photos }){
    return (
        <ul className="photo-container">
            {photos.map((photo) => (
                <Photo key={photo.id} photo={photo} />
            )
            )}
        </ul>
    )
}



export default Photolist;


//key={photos.photo.id} url={`https://live.staticflickr.com/${server-id}/${id}_${secret}.jpg`}