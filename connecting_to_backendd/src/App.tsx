//efficient use of ChatGPT for comments and formatting 
// Importing necessary styles and libraries
import "bootstrap/dist/css/bootstrap.css";
// import axios from "axios";
import { useState, useEffect } from "react";
import apiClient from "./services/api-client"

// Main component
function App() {
  // Interface for defining the 'user' object type
  interface user {
    id: number;
    name: string;
  }

  // State hooks for managing users, error, and loading state
  const [users, setUsers] = useState<user[]>([]);
  const [error, setError] = useState<string[]>([]); // Change to string[] for error state
  const [loading, setLoading] = useState<boolean>(true);

  // Effect hook to fetch user data on component mount
  useEffect(() => {
    // Making an API request to fetch user data
    apiClient
      .get<user[]>("/users")
      .then((res) => {
        // Setting the fetched user data to the 'users' state
        setUsers(res.data);
      })
      .catch((err ) => {
        // Handling error by setting error message to the 'error' state
        setError([err.message]);
      })
      .finally(() => {
        // After completion (success or failure), set loading to false
        setLoading(false);
      });
  }, []);

  // Function for deleting a user data
  const deleteUser = (user: user) => {
    const originalUsers = [...users];

    // Updating 'users' state by filtering out the deleted user
    setUsers(users.filter((u) => u.id !== user.id));

    // Making a delete request to remove the user data from the server
    apiClient
      .delete("/users/" + user.id)
      .catch((err) => {
        // Handling error by reverting the 'users' state to its original value
        setError([err.message]);
        setUsers(originalUsers);
      });
  };

  // Function for adding a new user data
  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "sameer" };
    setUsers([...users, newUser]);

    // Making a post request to add the new user data to the server
    apiClient
      .post("/users", newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        // Handling error by reverting the 'users' state to its original value
        setError([err.message]);
        setUsers(originalUsers);
      });
  };
  const updteUser = (user: user) => {
    const originalUsers = [...users];
   const updatedUser = {...user, name:user.name + ' edited'}
   setUsers(users.map(u => u.id === user.id ? updatedUser : u))

   apiClient.patch('/users/'+user.id, updatedUser)
   .catch(err => {
    setError(err.message);
    setUsers(originalUsers)

   })
  }

  return (
    <>
      {/* Button to add a new user */}
      <button onClick={addUser} className="btn btn-primary mb-3 mx-5">
        Add
      </button>
      {/* Displaying error message if present */}
      {error.length > 0 && <p className="text-danger">{error[0]}</p>}
      {/* Displaying loading spinner if data is being fetched */}
      {loading && <div className="spinner-border"></div>}
      {/* Displaying the list of users */}
      <ul className="list-group mx-5">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {/* Displaying user name */}
            {user.name}
            <div>
            {/* Button to updating a user */}
            <button onClick={() => updteUser(user)} className="btn btn-outline-secondary mx-1">Update</button>
            {/* Button to delete a user */}
            <button
              onClick={() => deleteUser(user)}
              className="btn btn-outline-danger"
            >
              Delete
            </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
