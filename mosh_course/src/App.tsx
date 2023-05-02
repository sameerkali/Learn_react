import Like from "./component/Like";
import LoadMore from "./component/LoadMore";

function App() {
 
  return (
    <div>
      {/* <Like onClick={()=>{ console.log('Clicked')}}/> */}
      <LoadMore maxChars={100}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa esse sit repudiandae adipisci eum. Itaque doloribus tenetur qui accusamus rem optio est nesciunt aspernatur vero ducimus, molestiae error consectetur architecto quis. Natus, atque a recusandae animi doloribus similique ex cum sapiente quia pariatur ipsum amet, blanditiis quasi enim, iusto sunt repudiandae hic consectetur dolorem necessitatibus accusantium tempora voluptates repellat architecto! Debitis vel reiciendis alias? Fugit mollitia delectus maxime hic tempore dicta ex ipsum! Ratione odit repellat, labore quo accusantium fugiat. Similique quisquam nesciunt, sed ab atque eos rem ipsam voluptates earum, fuga quia sapiente doloremque ratione itaque nemo enim ipsum.
      </LoadMore>
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