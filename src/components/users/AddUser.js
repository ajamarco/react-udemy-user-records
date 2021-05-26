import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button"
import './AddUser.css'

export default function AddUser() {
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e);
    }

    return (
        <Card className='input'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="age">Name</label>
                <input type="number" name="age" id="age" />
                <Button/>
            </form>
        </Card>
    );
}
