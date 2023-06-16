import React from "react";

const ListGroup = (props) => {
  const { items, textProperty, valueProperty, selectedItem, onItemsSelect } =
    props;
  return (
    <ul className="list-group">
      <li className="list-group-item">AllGenres</li>
      {items.map((item) => (
        <li
          onClick={() => {
            onItemsSelect(item);
          }}
          key={item[valueProperty]}
          className={item === selectedItem ? "list-group-item active" : "list-group-item"}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "-id",
};

export default ListGroup;
