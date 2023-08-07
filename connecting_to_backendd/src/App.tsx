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

    // function for deleting a data 
    const deleteUser = (user:user) =>{
      const originalUsers = [...users];

      setUsers(users.filter(u => u.id !== user.id))

      axios.delete('https://jsonplaceholder.typicode.com/users/'+ user.id)
      .catch(err => {
        setError(err.message);
        setUsers(originalUsers);
      })
    }

  return (
    <>
{ error && <p className="text-danger">{error}</p>}
{ loading && <div className="spinner-border"></div>
}    <ul className="list-group">
      {users.map(user =>
        <li  className="list-group-item d-flex justify-content-between" key={user.id}>
          {user.name}
          <button onClick={() => deleteUser(user)} className="btn btn-outline-danger">Delete</button>
        </li>
      )}
    </ul>
    </>
  );
}

export default App;
