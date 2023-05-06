import { useState } from "react";
import Table from "./eexpense-tracker/components/table";
import ExpenseFilter from "./eexpense-tracker/components/expenseFilter";

function App() {
  const [selectCategoury, setSelectCategoury] = useState(" ");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "sameer", amount: 10, category: "Groceries" },
    { id: 2, description: "faridi", amount: 10, category: "Utilities" },
    { id: 3, description: "rais", amount: 10, category: "Utilities" },
    { id: 4, description: "faridi", amount: 10, category: "Utilities" }
  ]);

  const visibleExpenses = selectCategoury
    ? expenses.filter((e) => e.category === selectCategoury)
    : expenses;

  return (
    <div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategoury={(Category) => setSelectCategoury(Category)}
        />
      </div>
      <Table
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        //i m cheater, day 2 of cheating sorry about that
      />
    </div>
  );
}

export default App;
