// import { useState } from "react";
// import Alert from "./component/Alert";
// import Button from "./component/Button";

// function App() {
//   const [ alertVisible, setAlertVisible] =  useState(false);
//   return (
//     <div>
//       {alertVisible && <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>}
//       <Button  color="secondary" onClick={() => setAlertVisible(true)}>My Button</Button>
//     </div>
//   );
// }

// export default App;


















import ListGroup from "./component/ListGroup/ListGroup";

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
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;