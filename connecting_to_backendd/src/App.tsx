import 'bootstrap/dist/css/bootstrap.css';
import axios, {AxiosError} from "axios";
import { useState, useEffect } from "react";

function App() {
  interface user {
    id: number;
    name: string;
  }

  const [users, setUsers] = useState<user[]>([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    axios
        .get<user[]>("https://jsonplaceholder.typicode.com/users")
        .then(res => {
          setUsers(res.data);
          // setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          // setLoading(false);
        }).finally(()=>{
          setLoading(false);
        })
    },[]);

  return (
    <>
{ error && <p className="text-danger">{error}</p>}
{ loading && <div className="spinner-border"></div>
}    <ul>
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
