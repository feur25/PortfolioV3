import React , {  useState  } from "react";
import { BlogImage } from "./BlogStyles";
import "./portfolio.css";
import { useTranslation } from 'react-i18next';
// import {Id} from "../../../variable";
import MyContext from "../../../variable";
import { ProjectImage } from "../Templates/GobalStyles";
import { Page } from "../../../components/Page";

const lngs = {
  en : { nativeName: "English"},
  fr : {
    nativeName : "French"
  }
};
const Blogs = ({ data }) => {
  const { t } = useTranslation();
  // function GetId(index){
  //   Id = index;
  //   alert("bravo");
  // }
  //onClick={GetId(item.blogId)} 
  const [myVariable, setMyVariable ] = useState("none");
  const handleClick = (index) => {
    setMyVariable(index);
    console.log(myVariable);
  };
  const ResetClik = () =>{
    setMyVariable("none");
  }
  function handleClickButton()
  {   
    if(document.body.style.backgroundColor != "rgb(53, 52, 52)"){
      document.body.style.background = "rgb(53, 52, 52)";
    }else{
      document.body.style.background = "linear-gradient(45deg,#9B4DCA,#4A0E35,#222730,#222730)";
    }
  }
  console.log(myVariable);
  if(myVariable === "none"){
    return (
        <div>
          <ul>
            <BlogImage>
              <div className="General">
              {data && data.map((item, index) =>
              <div className={item.class}>
                <button onClick={(event) => handleClick(item.blogId)}>
                          <article className="portfolio__item">
                            <div className="portfolio__item-image">
                              <img key={index} class="blogImages" src={item.imageUrl} alt={item.title}/>
                            </div>

                            <div className="portfolio__item-cta">
                              <div>
                                <button className="btn" onClick={handleClick}>
                                  <p className="white">{t(item.title)}</p>
                                </button>
                              </div>
                            </div>
                            
            </article>
            </button>
              {/* <a href={item.blogId} className='Power'> 

                  <img key={index} class="blogImages" src={item.imageUrl} alt={item.title}/>
                  <p>{item.title}</p>
                </a> */}
                </div>
              )}
              </div>
            </BlogImage>
          </ul>
        </div>
    );
  }else{
    return (
      <Page header="blog">
          {data && data.map((item, index) =>
          (myVariable === index ? 
            <ProjectImage>
                  <input type="checkbox" id="1" class="slider-toggle" onClick={handleClickButton} />
                    <label class="slider-viewport" for="1">
                      <div class="slider">
                        <div class="slider-button">&nbsp;</div>
                        <div class="slider-content left"><span>On</span></div>
                        <div class="slider-content right"><span>Off</span></div>
                      </div>
                    </label>
              
              <br/>
              <p className="black">{t(item.content)}</p>
              <button onClick={ResetClik}>{t("leaves")}</button>
            </ProjectImage>
            :<></> )
          )}
      </Page>
    )}
};
export default Blogs;