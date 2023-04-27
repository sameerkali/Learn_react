function ListGroup() {
  let items = [
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

  items = [];

// const getMessage = (msg:string) => {                            method1
//     return items.length === 0 ? <p>{msg}</p> : null;
// }

  return (
    <>
      <h1>List items</h1>
      {items.length === 0 && <p> no item found</p>}                     
      {/* {getMessage('No Cities')}                                     method1 */}
      <ul className="list-group">
        {items.map((items) => (
          <li key={items}>{items}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
