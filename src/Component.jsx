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
import MyContext from './variable';

function HomeSpawn() {
      // const [url, setUrl] = useState("None");
      // useEffect(()=>{
      //     setUrl(window.location.href)
      // }, [])
      // let someSpecificWord  = 'vercel.app/';
      // let splitstr = url.split(someSpecificWord);
      // const getId  = splitstr[1];
      const [myVariable, setMyVariable ] = useState("none");
      // console.log(myVariable);
      // function handleClick() {
      //   setMyVariable('none');
      //   console.log("ma variable : " + myVariable);
      // }
      console.log("ma variable : " + myVariable);
        if(myVariable ===  "none"){
          return (
              <div className="App">
                <Navbar>
                  {/* <GetUrl /> */}
                  <div className="myDivHome" >
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