import React from "react";
import "./Card.css";

function Card({ title, description, urlToImage, url }) {
    return (
        <>
            <div className="Card" onClick={() => window.open(url, "_blank")}>
                <img src={urlToImage} alt="This is image Section" />
                <div className="title">
                    <h3>{title}</h3>
                </div>
                <div className="description">
                    <p>{description}</p>
                </div>
            </div>
        </>
    );
}

export default Card;
