import React , {  useState, useEffect } from "react";
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

function HomeSpawn() {
      const [url, setUrl] = useState("None");
      useEffect(()=>{
          setUrl(window.location.href)
      }, [])
      let someSpecificWord  = '5173/';
      let splitstr = url.split(someSpecificWord);
      const getId  = splitstr[1];
      console.log(getId);
        if(getId === "" || getId === undefined){
          return (
              <div className="App">
                <Navbar>
                  {/* <GetUrl /> */}
                  <div className="myDivHome">
                    <Home />
                  </div>
                  {/* <Projects /> */}
                  {/* <div id="app"></div>
                  <App />
                  
                  <div id="app"></div> */}
                  {/* <MyApp /> */}
                  <div className="myDivExperience"> 
                    <Portfolio />
                  </div>
                  <div className="myDivAbout">
                    <About />
                  </div>
                  <div className="myDivServices"> 
                    <Services />
                  </div>
                  {/* <div className="myDivProtfolio"> 
                    <Portfolio />
                  </div> */}
                  {/* <ProfileCard /> */}
                  <div className="myDivBlog"> 
                  <MyApp />
                    {/* <Blog /> */}
                  </div>
                  <div className="myDivContact"> 
                    <Contact />
                  </div>
                </Navbar>
              </div>
        );
      }
      if(getId === "error"){
          return(
              <NotFound />
          )
      }
    return(
        <> 
        <Navbar> 
          <p>Hello</p>
          <Blog />
        </Navbar>
          {/* <SideBar /> 
          <Blog />
          <Contact />  */}
        </> 
    )
}
export default HomeSpawn;