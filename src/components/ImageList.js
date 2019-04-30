import React from "react";
import Image from "./Image";

const ImageList = props => {
  const images = props.images.map(({ id, description, urls }) => {
    return <Image key={id} url={urls.small} alt={description} />;
  });
  return <div className="image-list ui image">{images}</div>;
};

export default ImageList;
