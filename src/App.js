import React, {useState} from 'react';
import AddUser from './components/users/AddUser'
import UsersList from './components/users/UsersList'

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (name, age) => {
    setUsers(prevState => {
      return [...prevState, {name: name, age: age}];
    })
  }

  const deleteUser = index => {
    setUsers(prevState => {
      return prevState.filter((person, i) => i != index);
    })
  } 

  return (
    <div>
      <AddUser onAddUser={handleAddUser}/>
      <UsersList users={users} handleDelete={deleteUser}/>
    </div>
  );
}

export default App;
