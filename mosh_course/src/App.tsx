import Like from "./component/Like";

function App() {
 
  return (
    <div>
      <Like onClick={()=>{ console.log('Clicked')}}/>
    </div>
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