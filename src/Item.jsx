import React, { useState } from "react";

const Item = ({ item, itemName, handleDeleteItem, id }) => {
  const [itemPicked, setPicked] = useState(false);
  item.packed = itemPicked;

  return (
    <div className="single-item">
      <input
        type="checkbox"
        value={itemPicked}
        onChange={() => {
          setPicked(!itemPicked);
        }}
      />
      <p style={{ textDecoration: itemPicked ? "line-through" : "none" }}>
        {itemName}
      </p>
      <button
        type="button"
        className="remove-btn btn"
        onClick={() => handleDeleteItem(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Item;
