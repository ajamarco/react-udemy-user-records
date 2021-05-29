import React, {useState} from 'react';
import AddUser from './components/users/AddUser'
import UsersList from './components/users/UsersList'

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (name, age) => {
    setUsers(preState => {
      return [...users, {name: name, age: age}];
    })
  }

  return (
    <div>
      <AddUser onAddUser={handleAddUser}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
