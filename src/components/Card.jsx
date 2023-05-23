import React from "react";

const Card = ({ title, text, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="card-txt">
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Card;
