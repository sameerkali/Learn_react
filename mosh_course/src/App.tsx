import Alert from "./component/Alert";
import Button from "./component/Button";

function App() {
  return (
    <div>
      <Alert>
        hello <span>world</span>
      </Alert>
      <Button  color="secondary" onClick={()=>{console.log("Clicked")}}>My Button</Button>
    </div>
  );
}

export default App;


















// import ListGroup from "./component/ListGroup";

// function App() {
//   const items = [
//     "Ghaziabad",
//     "Patna",
//     "Delhi",
//     "Bhopal",
//     "Jaipur",
//     "Gurgao",
//     "Lucknow",
//     "Dehradune",
//     "Nenital"
//   ];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   }
//   return (
//     <div>
//       <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
//     </div>
//   );
// }

// export default App;