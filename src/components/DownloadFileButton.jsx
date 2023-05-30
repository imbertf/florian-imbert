import React from "react";

const DownloadFileButton = () => {
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch("cv_florian_imbert.pdf").then((response) => {
            response.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "cv_imbert_florian.pdf";
                alink.click();
            });
        });
    };
    return (
        <button onClick={onButtonClick} className="download-button">
            Télécharger PDF
        </button>
    );
};

export default DownloadFileButton;
