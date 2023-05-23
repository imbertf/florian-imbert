import React, { useState } from "react";

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    // Allow user to send a new message
    const handleReset = () => {
        setSubmitted(false);
    };

    if (submitted) {
        return (
            <div className="successMsgContent">
                <div className="successMsgContent-txt">
                    <h2>Merci !</h2>
                    <p>Je reviens rapidement vers vous.</p>

                    <button
                        type={"submit"}
                        text={"Nouveau message"}
                        onClick={handleReset}
                    ></button>
                </div>
            </div>
        );
    }
    return (
        <div className="contact">
            <form
                action="https://public.herotofu.com/v1/38f15300-f813-11ed-9eca-1f15a141e038"
                method="post"
                acceptCharset="UTF-8"
                onSubmit={handleSubmit}
                className="contact-form"
            >
                <div className="contact-form-input">
                    <label for="name">Nom</label>
                    <input name="Name" id="name" type="text" required />
                </div>
                <div className="contact-form-input">
                    <label for="email">Email</label>
                    <input name="Email" id="email" type="email" required />
                </div>
                <div className="contact-form-message">
                    <label htmlFor="message">Message</label>
                    <textarea
                        placeholder="Vous voulez en savoir plus? C'est par ici!
                        "
                        name="message"
                        id="message"
                        required
                    />
                    <p id="ERRORMESSAGE"></p>
                </div>
                <div className="contact-form-button">
                    <button type={"submit"}>Envoyer</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
