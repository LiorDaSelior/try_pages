/* import Message from "./Message";
import ListGroup from "./components/ListGroup";
import ListGroup1 from "./components/ListGroup1";
import ListGroup2 from "./components/ListGroup2";
import ListGroup3 from "./components/ListGroup3";
import ListGroup4 from "./components/ListGroup4";
import Alert from "./components/Alert";
function App() {
  let currItems = ["New York", "Paris", "LA"];
  let currHeading = "Cool List";
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  //return <div><Message></Message></div>
     return (
    <div>
      <ListGroup></ListGroup>
      <ListGroup1></ListGroup1>
      <ListGroup2></ListGroup2>
      <ListGroup3></ListGroup3>
      <ListGroup4
        items={currItems}
        heading={currHeading}
        onSelectItem={handleSelectedItem}
      ></ListGroup4>
    </div>
  );
  return (
    <div>
      <Alert>
        <ListGroup3></ListGroup3>
      </Alert>
      <ListGroup4
        items={currItems}
        heading={currHeading}
        onSelectItem={handleSelectedItem}
      ></ListGroup4>
    </div>
  );
}

export default App; */

import BuyButton from "./components/BuyButton";
import ProductContainer from "./components/ProductContainer";

function App() {
  return (
    <div className="main">
      <ProductContainer
        title="Title 1"
        text={"Desc desc desc"}
        price="5,000"
      ></ProductContainer>
      <ProductContainer
        title="Title 2"
        text={"Desc desc desc"}
        price="5,000"
      ></ProductContainer>
      <ProductContainer
        title="Title 1"
        text={"Desc desc desc"}
        price="5,000"
      ></ProductContainer>
      <ProductContainer
        title="Title 1"
        text={"Desc desc desc"}
        price="5,000"
      ></ProductContainer>
      <ProductContainer
        title="Title 1"
        text={"Desc desc desc"}
        price="5,000"
      ></ProductContainer>
      <ProductContainer
        title="Title 1"
        text={"Desc desc desc"}
        price="5,000"
      ></ProductContainer>
    </div>
  );
}

export default App;
