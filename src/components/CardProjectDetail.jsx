import React from "react";

const CardProjectDetail = ({ background, title, text }) => {
    return (
        <div className="cardprojectdetail" style={background}>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    );
};

export default CardProjectDetail;
