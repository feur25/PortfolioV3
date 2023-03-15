import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";

export const GlobalStyles = createGlobalStyle`
${normalize()}
:root {
  font-size: 16px;
  line-height: 24px;
  font-family: ${primaryFont};
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #1f1f1f;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}
// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box !important; }

// html, body {
//   height: 100%; }

// body {
//   display: table;
//   width: 100%;
//   height: 100%;
//   background-color: #171717;
//   color: #000;
//   line-height: 1.6;
//   position: relative;
//   font-family: sans-serif;
//   overflow: hidden; }
#contact {
  width: 100%;
  height: 100%;
}

.section-header {
  text-align: center;
  margin: 0 auto;
  padding: 40px 0;
  font: 300 60px 'Oswald', sans-serif;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 6px;
}

.contact-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  max-width: 840px;
}

/* Left contact page */
.form-horizontal {
  /*float: left;*/
  max-width: 400px;
  font-family: 'Lato';
  font-weight: 400;
}

.form-control, 
textarea {
  max-width: 400px;
  background-color: #000;
  color: #fff;
  letter-spacing: 1px;
}

.send-button {
  margin-top: 15px;
  height: 34px;
  width: 400px;
  overflow: hidden;
  transition: all .2s ease-in-out;
}

.alt-send-button {
  width: 400px;
  height: 34px;
  transition: all .2s ease-in-out;
}

.send-text {
  display: block;
  margin-top: 10px;
  font: 700 12px 'Lato', sans-serif;
  letter-spacing: 2px;
}

.alt-send-button:hover {
  transform: translate3d(0px, -29px, 0px);
}

/* Begin Right Contact Page */
.direct-contact-container {
  max-width: 400px;
}

/* Location, Phone, Email Section */
.contact-list {
  list-style-type: none;
  margin-left: -30px;
  padding-right: 20px;
}

.list-item {
  line-height: 4;
  color: #aaa;
}

.contact-text {
  font: 300 18px 'Lato', sans-serif;
  letter-spacing: 1.9px;
  color: #bbb;
}

.place {
  margin-left: 62px;
}

.phone {
  margin-left: 56px;
}

.gmail {
  margin-left: 53px;
}

.contact-text a {
  color: #bbb;
  text-decoration: none;
  transition-duration: 0.2s;
}

.contact-text a:hover {
  color: #fff;
  text-decoration: none;
}


/* Social Media Icons */
.social-media-list {
  position: relative;
  font-size: 22px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

.social-media-list li a {
  color: #fff;
}

.social-media-list li {
  position: relative; 
  display: inline-block;
  height: 60px;
  width: 60px;
  margin: 10px 3px;
  line-height: 60px;
  border-radius: 50%;
  color: #fff;
  background-color: rgb(27,27,27);
  cursor: pointer; 
  transition: all .2s ease-in-out;
}

.social-media-list li:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 0 1px #fff;
  transition: all .2s ease-in-out;
}

.social-media-list li:hover {
  background-color: #fff; 
}

.social-media-list li:hover:after {
  opacity: 1;  
  transform: scale(1.12);
  transition-timing-function: cubic-bezier(0.37,0.74,0.15,1.65);
}

.social-media-list li:hover a {
  color: #000;
}

.copyright {
  font: 200 14px 'Oswald', sans-serif;
  color: #555;
  letter-spacing: 1px;
  text-align: center;
}

hr {
  border-color: rgba(255,255,255,.6);
}

/* Begin Media Queries*/
@media screen and (max-width: 850px) {
  .contact-wrapper {
    display: flex;
    flex-direction: column;
  }
  .direct-contact-container, .form-horizontal {
    margin: 0 auto;
  }  
  
  .direct-contact-container {
    margin-top: 60px;
    max-width: 300px;
  }    
  .social-media-list li {
    height: 60px;
    width: 60px;
    line-height: 60px;
  }
  .social-media-list li:after {
    width: 60px;
    height: 60px;
    line-height: 60px;
  }
}

@media screen and (max-width: 569px) {

  .direct-contact-container, .form-wrapper {
    float: none;
    margin: 0 auto;
  }  
  .form-control, textarea {
    
    margin: 0 auto;
  }
 
  
  .name, .email, textarea {
    width: 280px;
  } 
  
  .direct-contact-container {
    margin-top: 60px;
    max-width: 280px;
  }  
  .social-media-list {
    left: 0;
  }
  .social-media-list li {
    height: 55px;
    width: 55px;
    line-height: 55px;
    font-size: 2rem;
  }
  .social-media-list li:after {
    width: 55px;
    height: 55px;
    line-height: 55px;
  }
  
}

@media screen and (max-width: 410px) {
  .send-button {
    width: 99%;
  }
}
.lines {
  z-index : -1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  margin: auto;
  width: 90vw; }

.line {
  position: absolute;
  width: 1px;
  height: 100%;
  top: 0;
  left: 50%;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden; }
  .line::after {
    content: '';
    display: block;
    position: absolute;
    height: 15vh;
    width: 100%;
    top: -50%;
    left: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 75%, #ffffff 100%);
    animation: drop 7s 0s infinite;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97); }
  .line:nth-child(1) {
    margin-left: -25%; }
    .line:nth-child(1)::after {
      animation-delay: 2s; }
  .line:nth-child(3) {
    margin-left: 25%; }
    .line:nth-child(3)::after {
      animation-delay: 2.5s; }

@keyframes drop {
  0% {
    top: -50%; }
  100% {
    top: 110%; } }


*, *::after, *::before{
  box-sizing: border-box;
  margin: 0;
  padding:0;
  text-decoration: none;
}

body {
  margin: 0;
  min-height: 100vh;
  overflow : hidden;
}
@media screen and (max-width: 720px) {
  body {
    overflow : visible;
  }
}
.myDivAbout{
  display:none;
}
.myDivHome{
  display : block;
}
.myDivContact{
  display : none;
}
.myDivExperience{
  display : none;
}
.myDivServices{
  display : none;
}
.myDivProtfolio{
  display : none;
}
.myDivBlog{
  display:none;
}
button{
  background : none;
  border : none;
}
.sub-project{
  width: 90vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 15px 5px;
  margin: 8vh 10vw;
}
.sub-project p{
  display: none;
  color: #8EC7FE;
}
// @media screen and (min-width: 720px) {
//   .image img{
//     width: 50vw;
//   }
//   .sub-project{
//     width : 150vw;
//     flex-direction: column;
//     margin: -10vh 20vw;
//   }
// }
@media screen and (max-width: 1027px) {
  .sub-project{
    margin: -5vh 10vw;
  }
  
}
@media screen  and (max-width: 1220px) {
  .OneProjet{
    width: 50vw;
  }
  .sub-project{
    margin: 5vh 10vw;
  }
}
.OneProjet:hover p{
  font-family: fantasy;
  font-size: 3vw;
  position: absolute;
  z-index: 2;
  display: none;
}
.TwoProjet:hover p{
  font-family: fantasy;
  font-size: 3vw;
  position: absolute;
  z-index: 2;
  display: none;
}
// .image img:hover{
//   filter: blur(20px);
//   -webkit-filter: blur(25px);
// }
.TwoProjet:hover img{
  filter: blur(5px);
  -webkit-filter: blur(5px);
}
.OneProjet:hover img{
  filter: blur(5px);
  -webkit-filter: blur(5px);
}
.ThreeProjet:hover img{
  filter: blur(5px);
  -webkit-filter: blur(5px);
}
.FourthProjet:hover img{
  filter: blur(5px);
  -webkit-filter: blur(5px);
}
.FiveProjet:hover img{
  filter: blur(5px);
  -webkit-filter: blur(5px);
}
.SixProjet:hover img{
  filter: blur(5px);
  -webkit-filter: blur(5px);
}
.SevenProjet:hover img{
  filter: blur(5px);
  -webkit-filter: blur(5px);
}
.HeightProjet:hover img{
  filter: blur(5px);
  -webkit-filter: blur(5px);
}
.OneProjet:hover p{
  display: block;
}
.TwoProjet:hover p{
  display: block;
}
.image img{
  width: 20vw;
  height: 40vh;
  border: 3px solid white;
  border-radius: 25%;
}
@media screen and (max-width: 719px) {
  .image img{
    width: 50vw;
  }
  .sub-project{
    width : 150vw;
    flex-direction: column;
    margin: -10vh 20vw;
  }
}
.ThreeProjet:hover p{
  font-family: fantasy;
  font-size: 3vw;
  position: absolute;
  z-index: 2;
  display: none;
}
.ThreeProjet:hover p{
  display: block;
}
.FourthProjet:hover p{
  font-family: fantasy;
  font-size: 3vw;
  position: absolute;
  z-index: 2;
  display: none;
}
.FourthProjet:hover p{
  display: block;
}
.FiveProjet:hover p{
  font-family: fantasy;
  font-size: 3vw;
  position: absolute;
  z-index: 2;
  display: none;
}
.FiveProjet:hover p{
  display: block;
}
.SixProjet:hover p{
  font-family: fantasy;
  font-size: 3vw;
  position: absolute;
  z-index: 2;
  display: none;
}
.SixProjet:hover p{
  display: block;
}
.SevenProjet:hover p{
  font-family: fantasy;
  font-size: 3vw;
  position: absolute;
  z-index: 2;
  display: none;
}
.SevenProjet:hover p{
  display: block;
}
.HeightProjet:hover p{
  font-family: fantasy;
  font-size: 3vw;
  position: absolute;
  z-index: 2;
  display: none;
}
.HeightProjet:hover p{
  display: block;
}
.OneProjet p{
  width: 20vw;
  height: 40vh;
}
.TwoProjet p{
  width: 20vw;
  height: 40vh;
}
.ThreeProjet p{
  width: 20vw;
  height: 40vh;
}
.FourthProjet p{
  width: 20vw;
  height: 40vh;
}
.SixProjet p{
  width: 20vw;
  height: 40vh;
}
.SevenProjet p{
  width: 20vw;
  height: 40vh;
}
.FiveProjet p{
  width: 20vw;
  height: 40vh;
}
.HeightProjet p{
  width: 20vw;
  height: 40vh;
}
.blogi{
  display : flex;
  flex-direction : colunm;
}

#blog-page{
  display : flex;
  flex-direction : colunm;
}
#apple,
#linkdin,
#github,
#facebook {
  font-size: 8em;
  background-color: #18191f;
  color: #fff;
  // box-shadow: 2px 2px 2px #00000080, 10px 1px 12px #00000080,
  //   2px 2px 10px #00000080, 2px 2px 3px #00000080, inset 2px 2px 10px #00000080,
  //   inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080,
  //   inset 2px 2px 10px #00000080;
  border-radius: 29px;
  padding: 11px 19px;
  animation: animate 3s linear infinite;
  // text-shadow: 0 0 50px #0072ff, 0 0 100px #0072ff, 0 0 150px #0072ff, 0 0 200px #0072ff;
}
#linkdin {
  animation-delay: 0.3s;
}
#facebook {
  animation-delay: 0.7s;
}
#github {
  animation-delay: 0.1s;
}

@keyframes animate {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}
.containerV2 i{
  width : 5vw;
  height : 5vh;
}
.containerV2{
  margin : 15vh auto;
}
@media screen and (max-width : 1350px){
  .containerV2{
    display : none;
  }
}
`;
