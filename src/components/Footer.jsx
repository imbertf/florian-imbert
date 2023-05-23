import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <section className="footer-section">
                    <h4> Retrouvez mon profil sur </h4>
                    <a
                        href="https://linkedin.com/in/imbertf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Lindedin
                    </a>
                    <a
                        href="https://www.malt.fr/profile/florianimbert"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Malt
                    </a>
                    <a
                        href="https://https-imbertf-fr.welovedevs.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Welovedevs
                    </a>
                    <a
                        href="https://github.com/imbertf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </a>
                </section>
                <section className="footer-section">
                    <h4> Contacts </h4>
                    <a href="tel:0684088879">(+33) 06 84 08 88 79</a>
                    <a href="mailto:f.imbert4@gmail.com">f.imbert4@gmail.com</a>
                </section>
            </div>
            <p>florian Imbert ©️ - 2023</p>
        </footer>
    );
};

export default Footer;
