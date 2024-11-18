/* eslint-disable react/prop-types */
//A Photo component that will display a li and img element.
const Photo = ({ title, url }) => {
  return (
    <li>
      <img src={url} alt={title} />
      <p>{title}</p>
    </li>
  );
};

export default Photo;
