import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
import "./portfolio.css";
import IMG1 from "../../../assets/images/1.png";
import IMG2 from "../../../assets/images/2.png";
import IMG3 from "../../../assets/images/3.png";
import IMG4 from "../../../assets/images/4.png";
import IMG5 from "../../../assets/images/5.png";
import IMG6 from "../../../assets/images/portfolio6.jpg";
import IMG7 from "../../../assets/images/portfolio6.jpg";
import IMG8 from "../../../assets/images/portfolio6.jpg";
import { Page } from "../../../components/Page";

export const Services = () => {
  return (
    <Page header="Services">
      <section id="services">

        <div className="container services__container">
          {/*  UI/UX */}
          <article className="service">
            <div className="services__head">
              <h3>Développement Web : E-commerce / Vitrine</h3>
            </div>

            <ul className="services__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Maquette du site web</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Développement aux choix, sur les framework Angular, React, Laravel ...</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Mise en place du server en Ligne</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Mise en place de BDD (si demmandés)</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Admin Dashboard / vision Global du site / Ajout de nouveau produit</p>
              </li>
            </ul>
          </article>

          {/* Web Development*/}
          <article className="service">
            <div className="services__head">
              <h3>Java Plugin / Mods Minecraft</h3>
            </div>

            <ul className="services__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Création de Plugin sur demande détaillé</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Création de Mod, si Modèle 3D fournis au préalable</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Création de DataPack</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Mise en place du server</p>
              </li>
            </ul>
          </article>

          {/* Content Creation*/}
          <article className="service">
            <div className="services__head">
              <h3>Cours Apprentisage aux Jeux Vidéos</h3>
            </div>

            <ul className="services__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Cours Unity : C#</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Cours Unreal Engine : C++ / .h / Blueprint</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Apprentisage de comment faire : UI / Widget</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Optimisation du Jeu</p>
              </li>
            </ul>
          </article>
          <article className="service">
            <div className="services__head">
              <h3>Content Creation</h3>
            </div>

            <ul className="services__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
            </ul>
          </article>
          <article className="service">
            <div className="services__head">
              <h3>Content Creation</h3>
            </div>

            <ul className="services__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
            </ul>
          </article>
          <article className="service">
            <div className="services__head">
              <h3>Content Creation</h3>
            </div>

            <ul className="services__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
            </ul>
          </article>
          
        </div>
      </section>
      <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
      </Page>
  );
};

export const Portfolio = () => {
  return (
    <Page header="Projects">
      <section id="projects">
      <div className="sub-project">
            <div className="OneProjet">
                <a href="https://github.com/feur25/JavaPlugin">
                <p>Helysio StartUp </p>
                <div className="image"><img src={IMG1}/></div></a>
            </div>
            <div className="TwoProjet">
                <a href="">
                <p>Unreal Engine</p>
                <div className="image"><img src={IMG2}/></div></a>
            </div>
            <div className="ThreeProjet">
                <a href="https://github.com/AxelSevenS/YnovJam2023.git">
                <p>Challenge 48H</p>
                <div className="image"><img src={IMG3}/></div></a>
            </div>
            <div className="FourthProjet">
                <a href="https://github.com/feur25/Forum">
                <p>Forum</p>
                <div className="image"><img src={IMG4}/></div></a>
            </div>
            <div className="FiveProjet">
                <a href="">
                <p>IA Web</p>
                <div className="image"><img src={IMG5}/></div></a>
            </div>
            <div className="SixProjet">
                <a href="">
                <p>BDD</p>
                <div className="image"><img src={IMG6}/></div></a>
            </div>
            <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
            {/* <div className="SevenProjet">
                <a href="">
                <p>Helysio</p>
                <div className="image"><img src={IMG7}/></div></a>
            </div>
            <div className="HeightProjet">
                <a href="">
                <p>Helysio</p>
                <div className="image"><img src={IMG8}/></div></a>
            </div> */}
        </div>

        {/* <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container portfolio__container">
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG1} alt="" />
            </div>
            <h3>This is portfolio item title</h3>

            <div className="portfolio__item-cta">
              <div>
                <a href="#" className="btn">
                  Github
                </a>
              </div>

              <div>
                <a href="#" className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG2} alt="" />
            </div>
            <h3>This is portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="#" className="btn">
                Github
              </a>
              <a href="#" className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG3} alt="" />
            </div>
            <h3>This is portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="#" className="btn">
                Github
              </a>
              <a href="#" className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG4} alt="" />
            </div>
            <h3>This is portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="#" className="btn">
                Github
              </a>
              <a href="#" className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG5} alt="" />
            </div>
            <h3>This is portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="#" className="btn">
                Github
              </a>
              <a href="#" className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG6} alt="" />
            </div>
            <h3>This is portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="#" className="btn">
                Github
              </a>
              <a href="#" className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>
        </div> */}
      </section>
    </Page>
  );
};
