//react
import React from "react";

//datas
import profile from "../datas/profil.jpg";

//components
import Tag from "../components/Tag";
import DownloadFileButton from "../components/DownloadFileButton";

const Presentation = () => {
    return (
        <div className="presentation">
            <section className="presentation-card">
                <div className="presentation-card-wrapper">
                    <div className="presentation-card-wrapper-img">
                        <img src={profile} alt="" />
                    </div>
                    <div className="presentation-card-wrapper-title">
                        <h1>Florian Imbert</h1>
                    </div>
                    <div className="presentation-card-wrapper-tag">
                        <Tag texte={"Management"} />
                        <Tag texte={"Curiosité"} />
                        <Tag texte={"Cohésion"} />
                        <Tag texte={"Leadership"} />
                    </div>
                </div>
                <div className="presentation-card-text">
                    <h4>Ce que je peux vous apporter</h4>
                    <p>
                        Une capacité de <span>gestion d'équipe</span> acquise au
                        cours de plus de 3 ans d'experience chez{" "}
                        <span>Amazon</span> et 6 années dans{" "}
                        <span>l'armée</span> au profit d'un service de
                        renseignement.
                    </p>
                    <p>
                        <span>L'autonomie</span> et la{" "}
                        <span>gestion des priorités</span> développés dans le
                        secteur de <span>l'hôtellerie-restauration</span>{" "}
                        pendant 6 ans
                    </p>
                    <p>
                        La <span>mise en place</span> et le{" "}
                        <span>suivit de projet</span> en équipe dans le secteur
                        de la <span>supply chain</span> et le{" "}
                        <span>transport</span>
                    </p>
                    <p>
                        Ma <span>curiosité</span> ainsi que mon besoin
                        <span>d'apprentissage continue</span> ont étés
                        satisfaits par de nombreux voyages professionnels et
                        personnels à l'étranger.
                    </p>
                    <p>
                        Le goût du voyage et la découverte de cultures me font
                        apprécier de travailler en{" "}
                        <span>équipe multiculturelle</span> et{" "}
                        <span>internationale</span>.
                    </p>
                </div>
            </section>
            <section className="presentation-card">
                <div className="presentation-card-text">
                    <h4>Pour télécharger mon CV</h4>
                </div>
                <DownloadFileButton />
            </section>
        </div>
    );
};

export default Presentation;
