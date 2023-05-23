import React, { useState, useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollTopButton = () => {
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
                <div className="scroll-top-button" onClick={scrollTop}>
                    <BsArrowUp />
                    <p>Revenir en haut</p>
                </div>
            )}
        </>
    );
};

export default ScrollTopButton;
