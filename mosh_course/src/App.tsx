import { useState } from "react";
import Table from "./eexpense-tracker/components/table";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "sameer", amount: 10, category: "Utilitys" },
    { id: 2, description: "faridi", amount: 10, category: "Utilitys" },
    { id: 3, description: "rais", amount: 10, category: "Utilitys" },
    { id: 4, description: "faridi", amount: 10, category: "Utilitys" }
  ]);

  return (
    <div>
      <Table
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;