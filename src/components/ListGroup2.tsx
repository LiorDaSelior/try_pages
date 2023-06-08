//import { Fragment } from "react";

function ListGroup2() {
  let items = ["New York", "Paris", "cake"];
  //items = [];

  //const check = items.length === 0 ? <p>No items found.</p> : null;
  // add {check} instead of func
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>Cleaner error message</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() =>
              console.log("Clicked " + item + " in index " + index)
            }
          >
            {" "}
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup2;
