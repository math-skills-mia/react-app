// Practicing making interactive lists

import { useState } from "react";

// TypeScript requires props (function inputs) to have their typings defined
interface ListGroupProps {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: ListGroupProps) {
  // ListGroup function expects two props (or inputs). TypeScript requires props to be defined beforehand (eg using interface)

  const [selectedIndex, setSelectedIndex] = useState(-1);
  // selectedIndex is current selected index (starts at -1 = nothing selected)
  // setSelectedIndex is a Function to update selectedIndex (eg onClick={()=>setSelectedIndex(index)} updates index on click)

  // We can also do `const [name, setName] = useState("");`

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && "No objects in list."}
      <ul className="list-group">
        {items.map((item, index) => (
          // convert items in array to <li>{item}</li>
          <li
            key={item} // ensures effects go to the correct item (unique identifier like items.id)
            className={
              selectedIndex === index
                ? "list-group-item active" // highlights selected index
                : "list-group-item" // normal style otherwise
            }
            onClick={() => {
              console.log(item);
              setSelectedIndex(index); // updates selectedIndex on click
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
