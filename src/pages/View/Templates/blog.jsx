import React from 'react';
import NotFound from './NotFound';
import { ProjectImage } from "./GobalStyles";
import { Page } from "../../../components/Page";
import { useTranslation } from 'react-i18next';

const lngs = {
  en : { nativeName: "English"},
  fr : {
    nativeName : "French"
  }
};

const GetIdProject = ({ data }) => {
  const { t } = useTranslation();
  let route = window.location.href;
  let someSpecificWord  = 'seven/';
  let splitstr = route.split(someSpecificWord);
  let getId  = splitstr[1];
  let findId = parseInt(getId);
  const array1 = [0, 1, 2, 3, 4, 5, 6, 7];
  const found = array1.find(element => element === findId);
  function handleClick()
  {   
    if(document.body.style.backgroundColor != "rgb(53, 52, 52)"){
      document.body.style.background = "rgb(53, 52, 52)";
    }else{
      document.body.style.background = "linear-gradient(45deg,#9B4DCA,#4A0E35,#222730,#222730)";
    }
  }
    return (
    <Page header="blog">
        {data && data.map((item, index) =>
        (found === index ? 
          <ProjectImage>
                <input type="checkbox" id="1" class="slider-toggle" onClick={handleClick} />
                  <label class="slider-viewport" for="1">
                    <div class="slider">
                      <div class="slider-button">&nbsp;</div>
                      <div class="slider-content left"><span>On</span></div>
                      <div class="slider-content right"><span>Off</span></div>
                    </div>
                  </label>
            
            <br/>
            <p className="black">{t(item.content)}</p>
          </ProjectImage>
          :<></> )
        )}
    </Page>
  )
};
export default GetIdProject;