import categorys  from "../category";


interface Props {
    onSelectCategoury: (categoury: string) => void;
}

const expenseFilter = ( { onSelectCategoury }: Props) => {
  return (
    <select className="form-select" onChange={(event) => onSelectCategoury(event.target.value)}>
      <option value=""> All category</option>
      {categorys.map(categorys => <option key={categorys} value={categorys}>{categorys}</option>)}
    </select>
  );
};

export default expenseFilter;
