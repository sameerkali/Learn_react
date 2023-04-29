import { useState } from "react";


interface Props {
    items: string[];
    heading: string;
}


function ListGroup({items, heading}: Props) {
  

  //Hook
  const [selectedIndex, setSelectIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
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

export default name;
