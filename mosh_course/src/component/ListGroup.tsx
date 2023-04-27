function ListGroup() {

    const items = [
        'Ghaziabad',
        'Patna',
        'Delhi',
        'Bhopal',
        'Jaipur',
        'Gurgao',
        'Lucknow',
        'Dehradune',
        'Nenital'
    ];

  return (
    <>
      <ul className="list-group">
        {items.map(items => <li>{items}</li>)}
      </ul>
    </>
  );
}

export default ListGroup;
