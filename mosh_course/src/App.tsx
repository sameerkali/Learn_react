import Like from "./component/Like";
import LoadMore from "./component/LoadMore";
import Form from "./component/Form";
import Table from "./component/table";

function App() {
 
  return (
    <>
      <Form />
      <Table></Table>
    </>
  );
}

export default App;


















// import ListGroup from "./component/ListGroup/ListGroup";

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