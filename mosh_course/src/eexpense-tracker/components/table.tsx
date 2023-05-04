interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const table = ({ expenses, onDelete }: Props) => {
  if(expenses.length === 0) return null;
  return (
    <div className="table">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Delite</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expenses) => (
            <tr key={expenses.id}>
              <td>{expenses.description}</td>
              <td>{expenses.amount}</td>
              <td>{expenses.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(expenses.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total 👉</td>
            <td>₹{expenses.reduce((acc, expenses) => expenses.amount + acc, 0).toFixed(1)}</td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default table;
