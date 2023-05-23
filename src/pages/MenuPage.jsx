//react
import React from "react";
import { Link } from "react-router-dom";

//components
import Card from "../components/Card";

const MenuPage = () => {
    return (
        <div className="menu">
            <section className="menu-selection">
                <Link to="/presentation">
                    <Card
                        title={"Présentation"}
                        text={
                            "Ce que je peux vous apporter et télécharger mon CV"
                        }
                    />
                </Link>
                <Link to="/portfolio">
                    <Card
                        title={"Portfolio"}
                        text={
                            "Réalisation professionnelles et projets formation"
                        }
                    />
                </Link>
                <Link to="/contact">
                    <Card
                        title={"Contact"}
                        text={
                            "N'hésitez pas à m'appeler ou me contacter via le formulaire!"
                        }
                    />
                </Link>
            </section>
        </div>
    );
};

export default MenuPage;
