import { useState } from "react";

function ListGroup() {
  const items = [
    "Ghaziabad",
    "Patna",
    "Delhi",
    "Bhopal",
    "Jaipur",
    "Gurgao",
    "Lucknow",
    "Dehradune",
    "Nenital"
  ];

  //Hook
  const [selectedIndex, setSelectIndex] = useState(-1);

  return (
    <>
      <h1>List items</h1>
      {items.length === 0 && <p> no item found</p>}
      <ul className="list-group">
        {items.map((items, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={items}
            onClick={ ()=>{ setSelectIndex(index)} }
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
