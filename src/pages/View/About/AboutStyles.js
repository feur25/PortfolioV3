import styled from "styled-components";
import { typeScale } from "../../../utils";

export const Paragraph = styled.p`
  font-size: ${typeScale.text};
  grid-column: 2/ 7;
  line-height: 2rem;
  padding-block: 2rem;
  display:flex;
  @media screen and (max-width: 720px) {
    grid-column: 1 / 7;
    font-size: ${typeScale.paragraph};
    // line-height: 1.2rem;
    padding-block: 0rem;
    display: flex;
    flex-direction: column;
  }
  // @media screen and (max-width: 516px) {
  //   margin: auto auto;
  // }
  // @media screen and (max-width: 658px) {
  //   margin: auto 10vh;
  // }
  @media screen and (max-width: 1233px) {
    margin: 10vh 5vw;
  }
`;
export const Button = styled.p`
  font-size: ${typeScale.text};
  grid-column: 2/ 7;
  line-height: 2rem;
  padding-block: 2rem;
  display:flex;
  flex-direction: column;
  @media screen and (max-width: 720px) {
    grid-column: 1 / 7;
    font-size: ${typeScale.paragraph};
    line-height: 1.2rem;
    padding-block: 0rem;
    display: flex;
    flex-direction: column;
  }
`;
export const Educations = styled.section`
  grid-column: 2/7;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-self: start;
  padding-top: 1rem;
  @media screen and (max-width: 720px) {
    position: absolute;
    margin: 75vh auto;
  }
`;

export const Text = styled.aside`
  grid-column: 2/7;
  width: 100%;
  @media screen and (max-width: 720px) {
    grid-column: 1 / 7;
    padding-inline: 1rem;
    margin: auto 10vh;
  }
  @media screen and (max-width: 490px) {
    grid-column: 1 / 7;
    padding-inline: 1rem;
    margin: auto;
  }
`;

export const SkillsWrapper = styled.aside`
  grid-column: 7/ 13;
  width: 100%;
  @media screen and (max-width: 1233px) {
    grid-column: 1 / 7;
    display : none;
  }
`;
export const ProfileStyles = styled.div`
@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");
* {
  font-family: Raleway, sans-serif;
}

.cardContainer {
}
.cardBack {
}

.flipperContainer {
  border-radius:35px;
}
.flipperContainer, .cardFront, .cardBack {
  -webkit-perspective: 1000px;
          perspective: 1000px;
	width: 300px;
	height: 80vh;
  position: relative;
  margin: 0 auto;
}
.flipperContainer:hover .flipper, .flipperContainer.hover .flipper {
		-webkit-transform: rotateY(180deg);
		        transform: rotateY(180deg);
}
.flipper {
	-webkit-transition: 1s;
	-o-transition: 1s;
	transition: 1s;
	-webkit-transform-style: preserve-3d;
	        transform-style: preserve-3d;
  border-radius:35px;
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  margin:auto;
}
/* hide back of pane during swap */
.cardFront, .cardBack {
/* 	-webkit-backface-visibility: hidden; */
/* 	        backface-visibility: hidden; */
}

/* front pane, placed above back */
.cardFront {
	z-index: 99;
	/* for firefox 31 */
	-webkit-transform: rotateY(0deg);
	        transform: rotateY(0deg);
}

/* back, initially hidden pane */
.cardBack {
	-webkit-transform: rotateY(180deg);
	        transform: rotateY(180deg);
}



.flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 10px;
}`;
