import React from "react";

const Image = props => {
  const { url, alt } = props;
  return <img src={url} alt={alt} />;
};

export default Image;
