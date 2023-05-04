import React from "react";


interface Props {
    onSelectCategoury: (categoury: string) => void;
}

const expenseFilter = ( { onSelectCategoury }: Props) => {
  return (
    <select className="form-select" onChange={(event) => onSelectCategoury(event.target.value)}>
      <option value=""> All category</option>
      <option value="Groceries">Groceries</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
};

export default expenseFilter;
