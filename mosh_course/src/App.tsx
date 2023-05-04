import Table from "./eexpense-tracker/components/table";

function App() {
  const expences = [
    {id: 1, description: 'sameer', amount: 10, category: 'Utilitys'},
    {id: 2, description: 'faridi', amount: 10, category: 'Utilitys'},
    {id: 3, description: 'rais', amount: 10, category: 'Utilitys'},
    {id: 4, description: 'faridi', amount: 10, category: 'Utilitys'},
  ]
 
  return (
    <div>
    <Table expenses={expences} onDelete={(id) => console.log('Delete', id)} />
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