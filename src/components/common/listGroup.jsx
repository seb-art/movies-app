import React from "react";

const ListGroup = (props) => {
  const { items, textProperty, valueProperty, onItemsSelect } = props;
  return (
    <ul className="list-group">
      <li className="list-group-item">AllGenres</li>
      {items.map((item) => (
        <li
          onClick={() => {
            onItemsSelect(item);
          }}
          key={item[valueProperty]}
          className="list-group-item"
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
