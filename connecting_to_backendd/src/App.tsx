import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  interface user {
    id: number;
    name: string;
  }

  const [users, setUsers] = useState<user[]>([]);
  const [error, setError] = useState([]);
  useEffect(() => {
    axios
      .get<user[]>("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch(err => setError(err.message));
  }, []);

  return (
    <>
{ error && <p className="text-danger">{error}</p>}
    <ul>
      {users.map(user =>
        <li key={user.id}>
          {" "}{user.name}
        </li>
      )}
    </ul>
    </>
  );
}

export default App;
