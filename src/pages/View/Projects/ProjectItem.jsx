import React , {  useState  } from "react";
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
import { useTranslation } from 'react-i18next';

const lngs = {
  en : { nativeName: "English"},
  fr : {
    nativeName : "French"
  }
};
export const Services = () => {
  const { t } = useTranslation();
  return (
    
    <Page header="Services">
      <section id="services">

        <div className="container services__container">
          {/*  UI/UX */}
          <article className="service">
            <div className="services__head">
              <h3>{t("firstService")}</h3>
            </div>

            <ul className="services__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>{t("FfirstSlot")}</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>{t("FsecondSlot")}</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>{t("FthirdSlot")}</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>{t("FfourthSlot")}</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>{t("FfithSlot")}</p>
              </li>
            </ul>
          </article>

          {/* Web Development*/}
          <article className="service">
            <div className="services__head">
              <h3>{t("secondService")}</h3>
            </div>

            <ul className="services__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>{t("SfirstSlot")}</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>{t("SsecondSlot")}</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>{t("SthirdSlot")}</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>{t("SfourthSlot")}</p>
              </li>
            </ul>
          </article>

          {/* Content Creation*/}
          <article className="service">
            <div className="services__head">
              <h3>{t("thirdService")}</h3>
            </div>

            <ul className="services__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>{t("TfirstSlot")}</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>{t("TsecondSlot")}</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>{t("TthirdSlot")}</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>{t("TfourthSlot")}</p>
              </li>
            </ul>
          </article>
          <article className="service">
            <div className="services__head">
              <h3>{t("fourthService")}</h3>
            </div>

            <ul className="services__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>{t("FOfirstSlot")}</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>{t("FOsecondSlot")}</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>{t("FOthirdSlot")}</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>{t("FOfourthSlot")}</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>{t("FOfithSlot")}</p>
              </li>
            </ul>
          </article>
          <article className="service">
            <div className="services__head">
              <h3>{t("fithService")}</h3>
            </div>

            <ul className="services__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>{t("FIfirstSlot")}</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>{t("FIsecondSlot")}</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>{t("FIthirdSlot")}</p>
              </li>
            </ul>
          </article>
          <article className="service">
            <div className="services__head">
              <h3>{t("sixthService")}</h3>
            </div>

            <ul className="services__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>{t("SIfirstSlot")}</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>{t("SIsecondSlot")}</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>{t("SIthirdSlot")}</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>{t("SIfourthSlot")}</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>{t("SIfithSlot")}</p>
              </li>
            </ul>
          </article>
          
        </div>
      </section>
      </Page>
  );
};
import MyContext from "../../../variable";
import NotFound from "../Templates/NotFound";
export const Portfolio = () => {
  const [myVariable, setMyVariable ] = useState("none");
  const handleClick = (index) => {
    setMyVariable(index);
    console.log(myVariable);
  };
  console.log("Ma variable : " +myVariable);
  if(myVariable === "error"){
    return(
      <NotFound />
    )
  }else{
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
                <a onClick={(event) => handleClick("error")}>
                <p>Unreal Engine</p>
                <div className="image"><img src={IMG2}/></div></a>
            </div>
            <div className="ThreeProjet">
                <a href="https://github.com/AxelSevenS/YnovJam2023.git">
                <p>Challenge 48H</p>
                <div className="image"><img src={IMG3}/></div></a>
            </div>
            <div className="FourthProjet">
                <a href="https://github.com/feur25/Social-Media">
                <p>Forum</p>
                <div className="image"><img src={IMG4}/></div></a>
            </div>
            <div className="FiveProjet">
                <a onClick={(event) => handleClick("error")}>
                <p>IA Web</p>
                <div className="image"><img src={IMG5}/></div></a>
            </div>
            <div className="SixProjet">
                <a onClick={(event) => handleClick("error")}>
                <p>BDD</p>
                <div className="image"><img src={IMG6}/></div></a>
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
  }
  
};
