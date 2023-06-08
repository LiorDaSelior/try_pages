//import { Fragment } from "react";

function ListGroup1() {
    let items = ['New York', 'Paris', "cake"];
    items = [];
    
    //const check = items.length === 0 ? <p>No items found.</p> : null; 
    // add {check} instead of func
    const getMessage = (errorNum: number) => {
      return items.length === 0 ? <p>No items found. (Error #{errorNum})</p> : null; 
    }
    return ( <>
    <h1>List</h1> 
    {getMessage(15)}
    {items.length === 0 && <p>Cleaner error message</p>}
    <ul className="list-group">
    {items.map(item => <li key={item}>{item}</li>)}
  </ul>
  </>);
}

export default ListGroup1;