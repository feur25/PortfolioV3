import React , {  useState, useEffect  } from "react";
import { Navbar, NavbarBlog } from "./components/Navbar";
// import SideBar from "./components/SideBar";
import { About } from "./pages/View/About";
import { Contact } from "./pages/View/Contact";
// import { Experience } from "./pages/View/Experience";
import { Home } from "./pages/View/home";
import {Services, Portfolio}  from "./pages/View/Projects/ProjectItem";
import MyApp from './_app';
import Blog from './_id';
import NotFound from "./pages/View/Templates/NotFound";
// import GetUrl from "./pages/Models/GetURLId";
// import {CardJob} from "./pages/View/Templates/tools";
import myVariable from './variable';

function HomeSpawn() {
      console.log("ma variable : " + myVariable[0]);
        if(myVariable[0] ===  undefined || myVariable[0] === "none"){
          return (
              <div className="App">
                <Navbar>
                  <div className="myDivHome" >
                    <Home />
                  </div>
                  <div className="myDivExperience"> 
                    <Portfolio />
                  </div>
                  <div className="myDivAbout">
                    <About />
                  </div>
                  <div className="myDivServices"> 
                    <Services />
                  </div>
                  <div className="myDivBlog"> 
                  <MyApp />
                  </div>
                  <div className="myDivContact"> 
                    <Contact />
                  </div>
                </Navbar>
              </div>
        );
      }
      if(myVariable === "error"){
          return(
              <NotFound />
          )
      }
      return(
        <> 
          <Navbar> 
            <Blog />
          </Navbar>
        </> 
    )
}
export default HomeSpawn;