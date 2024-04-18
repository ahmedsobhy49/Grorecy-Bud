import React, { useEffect } from "react";
import Item from "./Item";

const ItemsList = ({ items, handleDeleteItem }) => {
  return (
    <div className="items">
      {items.map((item) => {
        const { itemName, id } = item;
        return (
          <Item
            key={id}
            item={item}
            id={id}
            itemName={itemName}
            handleDeleteItem={handleDeleteItem}
          />
        );
      })}
    </div>
  );
};

export default ItemsList;
