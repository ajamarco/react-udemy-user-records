import React from 'react'

export default function AddUser() {
    return (
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="age">Name</label>
            <input type="number" name="age" id="age" />
            <button type="submit">Add User</button>
        </form>
    )
}
