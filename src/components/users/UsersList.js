import React from 'react'
import Card from '../UI/Card'
import "./UsersList.css";

export default function UsersList({users, handleDelete}) {
    
    const handleUserClick = e => {
        handleDelete(e.target.id);
    }

    const renderUser = (user, i) => {
        return(
            <li key={i} onClick={handleUserClick} id={i}>{user.name} - {user.age}</li>
        )
    }

    return (
        <Card className="users">
            <ul>
                {users.map((user, index) => renderUser(user, index))}
            </ul>
        </Card>
    )
}
