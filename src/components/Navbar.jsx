import gsap from "gsap";
import Flip from "gsap/Flip";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavbarContext } from "../context";
import { CloseButton, MenuButton } from "./form";
import { StyledNavbar, StyledBlogNavbar } from "./style/NavbarStyles";
import { NavbarItem, Penguin } from "./ui";
import IMG1 from "../assets/images/git.png";
import IMG2 from "../assets/images/link.png";
import { useTranslation } from 'react-i18next';

const lngs = {
  en : { nativeName: "English"},
  fr : {
    nativeName : "French"
  }
};


export const Navbar = ({ children }) => {
  const activeDot = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);
  const [navBarVisible, setNavBarVisible] = useState(false);

  const { t, i18n } = useTranslation();


  const handelDotMovement = (e) => {
    setIsScrolling(true);
    if (e.scroll !== false) {
      document.getElementById(`${e.target.id}-page`).scrollIntoView();
    }
    const state = Flip.getState(activeDot.current);
    e.target.appendChild(activeDot.current);
    document.querySelectorAll(".navbar-item").forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
    Flip.from(state, {
      duration: 0.5,
      absolute: true,
      ease: "elastic.out(1,0.8)",
    });
    setIsScrolling(false);
  };

  useEffect(() => {
    if (currentPage && isScrolling === false) {
      handelDotMovement({
        target: document.getElementById(currentPage),
        scroll: false,
      });
    }
  }, [currentPage]);

  useEffect(() => {
    gsap.registerPlugin(Flip);
  }, []);
  const About =  document.getElementsByClassName("myDivAbout");
  const Home =  document.getElementsByClassName("myDivHome");
  const Contact =  document.getElementsByClassName("myDivContact");
  const Services =  document.getElementsByClassName("myDivServices");
  const Experience =  document.getElementsByClassName("myDivExperience");
  const Blog =  document.getElementsByClassName("myDivBlog");
  function DisplayProfil() {
        for (let i = 0; i < Home.length; i++) {
          Home[i].style.display = "none";
        }
        for (let i = 0; i < Contact.length; i++) {
          Contact[i].style.display = "none";
        }
        for (let i = 0; i < Blog.length; i++) {
          Blog[i].style.display = "none";
        }
        for (let i = 0; i < Experience.length; i++) {
          Experience[i].style.display = "none";
        }
        for (let i = 0; i < Services.length; i++) {
          Services[i].style.display = "none";
        }
        for (let i = 0; i < About.length; i++) {
          About[i].style.display = "block";
        }
  }
  function DisplayContact() {
        for (let i = 0; i < Home.length; i++) {
          Home[i].style.display = "none";
        }
        for (let i = 0; i < Blog.length; i++) {
          Blog[i].style.display = "none";
        }
        for (let i = 0; i < Experience.length; i++) {
          Experience[i].style.display = "none";
        }
        for (let i = 0; i < Services.length; i++) {
          Services[i].style.display = "none";
        }
        for (let i = 0; i < Contact.length; i++) {
          Contact[i].style.display = "block";
        }
        for (let i = 0; i < About.length; i++) {
          About[i].style.display = "none";
        }
  }
  function DisplayHome() {
        for (let i = 0; i < Home.length; i++) {
          Home[i].style.display = "block";
        }
        for (let i = 0; i < Blog.length; i++) {
          Blog[i].style.display = "none";
        }
        for (let i = 0; i < Experience.length; i++) {
          Experience[i].style.display = "none";
        }
        for (let i = 0; i < Services.length; i++) {
          Services[i].style.display = "none";
        }
        for (let i = 0; i < Contact.length; i++) {
          Contact[i].style.display = "none";
        }
        for (let i = 0; i < About.length; i++) {
          About[i].style.display = "none";
        }
  }
  function DisplayServices() {
        for (let i = 0; i < Home.length; i++) {
          Home[i].style.display = "none";
        }
        for (let i = 0; i < Blog.length; i++) {
          Blog[i].style.display = "none";
        }
        for (let i = 0; i < Experience.length; i++) {
          Experience[i].style.display = "none";
        }
        for (let i = 0; i < Services.length; i++) {
          Services[i].style.display = "block";
        }
        for (let i = 0; i < Contact.length; i++) {
          Contact[i].style.display = "none";
        }
        for (let i = 0; i < About.length; i++) {
          About[i].style.display = "none";
        }
  }
  function DisplayExperience() {
    for (let i = 0; i < Home.length; i++) {
      Home[i].style.display = "none";
    }
    for (let i = 0; i < Blog.length; i++) {
      Blog[i].style.display = "none";
    }
    for (let i = 0; i < Experience.length; i++) {
      Experience[i].style.display = "block";
    }
    for (let i = 0; i < Services.length; i++) {
      Services[i].style.display = "none";
    }
    for (let i = 0; i < Contact.length; i++) {
      Contact[i].style.display = "none";
    }
    for (let i = 0; i < About.length; i++) {
      About[i].style.display = "none";
    }
}
function DisplayBlog() {
  for (let i = 0; i < Home.length; i++) {
    Home[i].style.display = "none";
  }
  for (let i = 0; i < Blog.length; i++) {
    Blog[i].style.display = "block";
  }
  for (let i = 0; i < Experience.length; i++) {
    Experience[i].style.display = "none";
  }
  for (let i = 0; i < Services.length; i++) {
    Services[i].style.display = "none";
  }
  for (let i = 0; i < Contact.length; i++) {
    Contact[i].style.display = "none";
  }
  for (let i = 0; i < About.length; i++) {
    About[i].style.display = "none";
  }
}
  return (
    <>
      <MenuButton
        className={navBarVisible ? "" : "active"}
        onClick={() => setNavBarVisible(true)}
      >
        <AiOutlineMenu size="30" />
      </MenuButton>
      <StyledNavbar className={navBarVisible ? "active" : ""}>
        <CloseButton onClick={() => setNavBarVisible(false)}>
          <AiOutlineClose size={30} />
        </CloseButton>
        <ul>
        <p></p>
        <button onClick={DisplayExperience}>
            <li>
              <NavbarItem
                className="navbar-item"
                onClick={handelDotMovement}
                id="projects"
              >
                {t('project')}
              </NavbarItem>
            </li>
          </button>
          <button onClick={DisplayServices}>
            <li>
              <NavbarItem
                className="navbar-item"
                onClick={handelDotMovement}
                id="services"
              >
                {t('service')}
              </NavbarItem>
            </li>
          </button>
          <button onClick={DisplayBlog}>
            <li>
              <NavbarItem
                className="navbar-item"
                onClick={handelDotMovement}
                id="blog"
              >
                {t('blog')}
              </NavbarItem>
            </li>
          </button>
          <button onClick={DisplayHome}>
            <li className="home_navbar-item">
              <NavbarItem
                className="navbar-item"
                onClick={handelDotMovement}
                id="home"
              >
                <Penguin />
                <div className="dot" ref={activeDot} />
              </NavbarItem>
            </li>
          </button>
          <button onClick={DisplayProfil}>
            <li>
              <NavbarItem
                className="navbar-item"
                onClick={handelDotMovement}
                id="about"
              >
                {t('about')}
              </NavbarItem>
            </li>
          </button>
          <button onClick={DisplayContact}>
            <li>
              <NavbarItem
                className="navbar-item"
                onClick={handelDotMovement}
                id="contact"
              >
                {t('contact')}
              </NavbarItem>
            </li>
          </button>
          <br/>
          <li>
            <div className="buttonTranslate">
              {Object.keys(lngs).map((lng)=>(
                    <button type="submit" key={lng} onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>{lngs[lng].nativeName}</button>
                  )
                  )}
              </div>
          </li>
          <li>
            <div className="containerV2">
              <a href="https://github.com/feur25">
                <NavbarItem>
                    <i id="github"><img src={IMG1}></img></i>
                </NavbarItem>
              </a>
              <br/>
              <br/>
              <a href="https://www.linkedin.com/in/quentin-coletta-361229173/">
                <NavbarItem>
                    <i id="linkdin"><img src={IMG2}></img></i>
                </NavbarItem>
              </a>
            </div>
          </li>
        </ul>
      </StyledNavbar>
      <NavbarContext.Provider value={setCurrentPage}>
        {children}
      </NavbarContext.Provider>
    </>
  );
};
export const NavbarBlog = ({ children }) => {
  // const activeDot = useRef(null);
  // const [isScrolling, setIsScrolling] = useState(false);
  // const [currentPage, setCurrentPage] = useState(null);
  // const [navBarVisible, setNavBarVisible] = useState(false);

  // const handelDotMovement = (e) => {
  //   setIsScrolling(true);
  //   if (e.scroll !== false) {
  //     document.getElementById(`${e.target.id}-page`).scrollIntoView();
  //   }
  //   const state = Flip.getState(activeDot.current);
  //   e.target.appendChild(activeDot.current);
  //   document.querySelectorAll(".navbar-item").forEach((el) => {
  //     el.classList.remove("active");
  //   });
  //   e.target.classList.add("active");
  //   Flip.from(state, {
  //     duration: 0.5,
  //     absolute: true,
  //     ease: "elastic.out(1,0.8)",
  //   });
  //   setIsScrolling(false);
  // };

  // useEffect(() => {
  //   if (currentPage && isScrolling === false) {
  //     handelDotMovement({
  //       target: document.getElementById(currentPage),
  //       // target: document.getElementById("home"),
  //       scroll: false,
  //     });
  //   }
  // }, [currentPage]);

  // useEffect(() => {
  //   gsap.registerPlugin(Flip);
  // }, []);

  // return (
  //   <>
  //     <MenuButton
  //       className={navBarVisible ? "" : "active"}
  //       onClick={() => setNavBarVisible(true)}
  //     >
  //       <AiOutlineMenu size="30" />
  //     </MenuButton>
  //     <StyledBlogNavbar className={navBarVisible ? "active" : ""}>
  //       <CloseButton onClick={() => setNavBarVisible(false)}>
  //         <AiOutlineClose size={30} />
  //       </CloseButton>
  //       <nav class="btn-pluss-wrapper">
  //       <h2 class="tooltip">Look!</h2>
  //       <div href="#" class="btn-pluss">
  //       <ul>
  //         <li>
  //           <NavbarItem
  //             className="navbar-item"
  //             onClick={handelDotMovement}
  //             id="blog"
  //           >
  //             Blog
  //           </NavbarItem>
  //         </li>
  //         <li className="home_navbar-item">
  //         <a href="">
  //           <NavbarItem
  //             className="navbar-item"
  //             onClick={handelDotMovement}
  //             id="home"
  //           >
  //             Home
  //             <div className="dot" ref={activeDot} />
  //           </NavbarItem>
  //           </a>
  //         </li>
  //         <li>
  //         <div >
  //           <NavbarItem>
  //             <i id="facebook"><img src={IMG1}></img></i>
  //           </NavbarItem>
  //         </div>
  //         </li>
  //         <li>
  //           <NavbarItem
  //             className="navbar-item"
  //             onClick={handelDotMovement}
  //             id="contact"
  //           >
  //             Contact
  //           </NavbarItem>
  //         </li>
  //       </ul>
  //       </div>
  //       </nav>
      
  //     </StyledBlogNavbar>
  //     <NavbarContext.Provider value={setCurrentPage}>
  //       {children}
  //     </NavbarContext.Provider>
  //   </>
  // );
};