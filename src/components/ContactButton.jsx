//react
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//icons
import { BsArrowDown } from "react-icons/bs";

const ContactButton = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", checkScrollTop);
        return () => {
            window.removeEventListener("scroll", checkScrollTop);
        };
    });

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 10) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 10) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {showScroll && (
                <div className="contact-button" onClick={scrollTop}>
                    <BsArrowDown />
                    <Link to="/contact">
                        <p>Contactez-moi !</p>
                    </Link>
                </div>
            )}
        </>
    );
};

export default ContactButton;
