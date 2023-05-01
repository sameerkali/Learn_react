import { useState } from "react";
import './ListGroup.css'


interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}


function ListGroup({items, heading, onSelectItem}: Props) {
  

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
            onClick={ ()=>{ 
              setSelectIndex(index);
              onSelectItem(items);
            }}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
