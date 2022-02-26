import React, { Component } from "react";
const ListGroup = (props) => {
  const { items, currentItem, textProperty, valueProperty, onItemSelect } =
    props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          className={
            item === currentGenre ? "list-group-item active" : "list-group-item"
          }
          onClick={() => {
            onItemSelect(item);
          }}
          key={item[valueProperty]}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};
ListGroup.defaultProps = {
  //set default for properties
  textProperty: "name",
  valueProperty: "_id",
};
export default ListGroup;
