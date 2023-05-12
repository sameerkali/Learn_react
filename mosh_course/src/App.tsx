import { useState } from "react";
import Table from "./eexpense-tracker/components/table";
import ExpenseFilter from "./eexpense-tracker/components/expenseFilter";
import ExpenseForm from "./eexpense-tracker/components/ExpensForm"
import categories from "./eexpense-tracker/category";



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
      <div className="mb-5">
        <ExpenseForm onSubmit={expense => setExpenses([...expenses, { ...expense, id: expenses.length + 1}])} /> 
        {/* <ExpenseForm onSubmit={data => console.log(data)} />  */}
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategoury={(Category) => setSelectCategoury(Category)}
        />
      </div>
      <Table
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;


// line num 25 me error kyu hai kuchh samaj nhi aa  rhaaa