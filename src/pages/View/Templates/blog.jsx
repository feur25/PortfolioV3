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
  let someSpecificWord  = '5173/';
  let splitstr = route.split(someSpecificWord);
  let getId  = splitstr[1];
  let findId = parseInt(getId);
  const array1 = [0, 1, 2, 3, 4, 5, 6, 7];
  const found = array1.find(element => element === findId);
  console.log(found);
    return (
    <Page header="blog">
        {data && data.map((item, index) =>
        (found === index ? 
          <ProjectImage>
            <img key={index} class="blogImages" src={item.imageUrl} alt={item.title}/>
            <h1>{t(item.title)}</h1>
            <p>{t(item.content)}</p>
          </ProjectImage>
          :<></> )
        )}
        <div class="lines">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
    </Page>
  )
};
export default GetIdProject;