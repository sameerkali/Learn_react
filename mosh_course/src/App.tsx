import ListGroup from "./component/ListGroup";

function App() {
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
  return (
    <div>
      {" "}
      <ListGroup items={items} heading="Cities" />{" "}
    </div>
  );
}

export default App;