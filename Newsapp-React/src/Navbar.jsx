import React, { useState } from "react";
import "./Navbar.css";
const Navbar = ({ setTopic }) => {
    let [open, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prev) => !prev);
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!inputValue.trim()) {
            alert("Please enter a topic");
            return;
        }

        if (inputValue.length > 50) {
            alert("Topic is too long. Please enter a shorter query.");
            return;
        }

        if (!/^[a-zA-Z0-9\s]+$/.test(inputValue)) {
            alert("Please enter a valid topic without special characters.");
            return;
        }

        setTopic(inputValue.trim().toLowerCase());
        setInputValue("");
    };
    return (
        <nav className="navbar">
            <div className="logo">NewsNCoffee</div>
            <div className={`navlink ${open ? "open" : ""}`}>
                <p onClick={() => setTopic("breaking-news")}>Home</p>
                <p onClick={() => setTopic("politics")}>Politics</p>
                <p onClick={() => setTopic("entertainment")}>Entertainment</p>
                <p onClick={() => setTopic("sports")}>Sports</p>
            </div>
            <form
                action=""
                onSubmit={handleSubmit}
                className={`input ${open ? "open" : ""}`}
            >
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </form>
            <div className="hamburger" onClick={toggleMenu}>
                ☰
            </div>
        </nav>
    );
};

export default Navbar;
