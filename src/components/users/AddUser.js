import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";

export default function AddUser() {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "" || age === "") {
            console.log("not valid");
        } else {
            console.log(`${username} ${age}`);
            setUsername("");
            setAge("");
        }
    };

    const handleInputchange = (e) => {
        if (e.target.id === "name") {
            setUsername(e.target.value);
        } else if (e.target.id === "age") {
            setAge(e.target.value);
        }
    };

    return (
        <Card className="input">
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleInputchange}
                    value={username}
                />
                <label htmlFor="age">Name</label>
                <input
                    type="number"
                    name="age"
                    id="age"
                    onChange={handleInputchange}
                    value={age}
                />
                <Button type="submit" handleClick={handleSubmit}>
                    Add User
                </Button>
            </form>
        </Card>
    );
}
