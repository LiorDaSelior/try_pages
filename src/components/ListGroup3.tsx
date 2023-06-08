//import { Fragment } from "react";
import { MouseEvent } from "react";
// Event handler
const handleClick = (event: MouseEvent) => {
  console.log(event);
  console.log(event.currentTarget);
};

function ListGroup3() {
  let items = ["New York", "Paris", "cake"];
  let selectedIndex = 0;
  //items = [];
  //const handleClick = () =>
  //const check = items.length === 0 ? <p>No items found.</p> : null;
  // add {check} instead of func
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>Cleaner error message</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={handleClick}
          >
            {" "}
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup3;
