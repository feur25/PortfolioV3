import styled from "styled-components";

export const BlogImage = styled.div`
  grid-column: 1/13;
  display: flex;
  justify-content: center;
  gap: 1rem;
  // .blogImages{
  //   height : 80px;
  // }
  .blogImages{

    height: 15vh;
    display: flex;
    flex-direction: column;
  }
  .blogImages:hover{
    cursor:pointer;
  }
  .Power{
    display: flex;
    justify-content : left;
    flex-direction : colunm;
    width : 25vw;
    flex-wrap: wrap;
    right: 40vw;
  }
  .blogImages img{
    border-radius: 10%;
  }

  button {
    all: unset;
    cursor: pointer;
    padding: 0.5rem;
  }
  .One{
  }
  .One img{

  }
  .One p{
    color: white;
    align-items : center;
  }
  .Two{
  }
  .Two img{

  }
  .Two p{
    color: white;
    align-items : center;
    
  }
  .Three{
  }
  .Three img{

  }
  .General{
    margin: 8vh 15vw;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-around;
    height: 85vh;
    align-content: space-between;
  }
  @media screen and (max-width: 720px) {
    .General{
      height: 100%;
    }
    
  }
  .Three p{
    color: white;
    align-items : center;
  }
  .Four{
  }
  .Four img{

  }
  .Four p{
    color: white;
    align-items : center;
  }
  .Six p{
    color: white;
    align-items : center;
  }
  .Five p{
    color: white;
    align-items : center;
  }
  .Seven p{
    color: white;
    align-items : center;
  }
  // .Seven:hover p {
  //   color:black;
  // }
  // .One:hover p {
  //   color:black;
  // }
  // .Two:hover p {
  //   color:black;
  // }
  // .Three:hover p {
  //   color:black;
  // }
  // .Four:hover p {
  //   color:black;
  // }
  // .Five:hover p {
  //   color:black;
  // }
  // .Six:hover p {
  //   color:black;
  // }
  .portfolio__item-cta:hover p{
    color : black;
  }
  svg {
    width: 60px;
  }
  @media screen and (max-width: 720px) {
    grid-column: 1 / 7;
  }
`;