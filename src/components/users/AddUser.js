import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import "./AddUser.css";

export default function AddUser({ onAddUser }) {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "" || age === "") {
            setShowModal(true);
        } else {
            onAddUser(username, age);
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

    const handleModalClick = e => {
        setShowModal(false);
    }

    const handleShowModal = () => {
        return (
            <ErrorModal header="Something went wrong" body="The fields cannot be left blank" onModalBtnClick={handleModalClick}/>
        )
    }

    return (
        <div>
            {showModal === true ? handleShowModal() : null};
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
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        onChange={handleInputchange}
                        value={age}
                    />
                    <Button btnType="submit" handleClick={handleSubmit}>
                        Add User
                    </Button>
                </form>
            </Card>
        </div>
    );
}
