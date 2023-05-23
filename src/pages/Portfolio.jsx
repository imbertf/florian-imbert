//react
import React from "react";

//datas
import dataFormation from "../datas/formation.json";
import dataProfessionnel from "../datas/professionnel.json";

//components
import Slideshow from "../components/Slideshow";

const Portfolio = () => {
    return (
        <div className="portfolio">
            <main className="portfolio-wrapper">
                <section className="portfolio-section">
                    <div className="portfolio-section-title">
                        <a name="professionnel" />
                        <h2>Réalisations professionnelles</h2>
                    </div>
                    <Slideshow
                        datas={dataProfessionnel}
                        type={"professionnel"}
                    />
                </section>

                <section className="portfolio-section">
                    <div className="portfolio-section-title">
                        <a name="formation" />
                        <h2>Projets professionnalisants</h2>
                    </div>
                    <Slideshow datas={dataFormation} type={"formation"} />
                </section>
            </main>
        </div>
    );
};

export default Portfolio;
