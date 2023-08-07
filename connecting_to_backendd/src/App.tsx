import axios, {AxiosError} from "axios";
import { useState, useEffect } from "react";

function App() {
  interface user {
    id: number;
    name: string;
  }

  const [users, setUsers] = useState<user[]>([]);
  const [error, setError] = useState([]);

  useEffect(() => { 
    const fetchUsers = async () => {
      try{
      const res = await axios
        .get<user[]>("https://jsonplaceholder.typicode.com/users")
        setUsers(res.data)
      }catch(err){
        setError((err as AxiosError).message)
      }
      }
      fetchUsers();
    },[]);
    // .then(res => setUsers(res.data))
    // .catch(err => setError(err.message));

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
