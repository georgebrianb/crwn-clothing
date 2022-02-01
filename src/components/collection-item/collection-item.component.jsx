import React from "react";

import "./collection-item.styles.scss";

const CollectionItem = ({ name, imageUrl, price }) => {
  return (
    <div className="collection-item">
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default CollectionItem;
