//react
import React, { useState } from "react";

//components
import Tag from "../components/Tag";

//icons
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";

function Slideshow({ datas }) {
    const data = datas.projets;

    const [currentIndex, setCurrentIndex] = useState(0);

    function handlePrevClick() {
        const index = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
        setCurrentIndex(index);
    }

    function handleNextClick() {
        const index = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    }

    const currentItem = data[currentIndex];

    return (
        <div className="slideshow">
            <div className="slideshow-picture">
                <img
                    src={`./medias/logos/small/${currentItem.picture}`}
                    alt={currentItem.name}
                />
                <div className="slideshow-picture-controls">
                    <button onClick={handlePrevClick}>
                        <BsArrowLeftSquare />
                    </button>
                    <button onClick={handleNextClick}>
                        <BsArrowRightSquare />
                    </button>
                </div>
            </div>
            <div className="slideshow-content">
                <h2>{currentItem.name}</h2>
                <p>{currentItem.summary}</p>
                <ul>
                    {currentItem.keywords.map((keyword, index) => (
                        <li key={keyword}>
                            <Tag key={index} texte={keyword} />
                        </li>
                    ))}
                </ul>
            </div>
            <p className="slideshow-website">
                <a
                    href={currentItem.url}
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    <p>Website</p>
                </a>
            </p>
        </div>
    );
}

export default Slideshow;
