import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  console.log("items", items);
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.map(({ id, ...itemProps }) => {
          return <CollectionItem key={id} {...itemProps} />;
        })}
      </div>
    </div>
  );
};

export default CollectionPreview;
