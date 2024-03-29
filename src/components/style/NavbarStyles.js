import styled from "styled-components";

export const StyledNavbar = styled.nav`
  position: fixed;
  top: 0%;
  left: 3%;
  transform: translateX(-50%);
  padding: 2rem;
  z-index: 100;
  background-color : black;
  height: 100%;
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 3rem;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 720px) {
    left: 0;
    transform: translateX(-150%);
    width: 70vw;
    height: 100%;
    background-color: #12121233;
    backdrop-filter: blur(5px);
    transition: transform 0.2s ease-in-out;
    ul {
      flex-direction: column;
      align-items: flex-start;

      .home_navbar-item {
        order: -1;
      }
    }

    &.active {
      transform: translateX(0%);
    }
  }
`;
export const StyledBlogNavbar = styled.nav`
*{
  box-sizing: border-box;
}

section{
  
  position: relative;
}

.btn-pluss{
  overflow: hidden;
  position: relative;
  display: block;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 22px;
  width: 30px;
  margin: 0 auto;
  //padding-top: 25px;
  background-color: black;
  transition: width .3s .5s ease, border-radius 1.1s ease;
  a{
    display: block;
    position: relative;
    color: var(--color-bg-variant);
    text-decoration: none;
    overflow: hidden;
    padding: 5px;
    border-radius: 5px;
    &:hover{
      text-decoration: inherit;
      color: white;
      background-color: var(--color-bg-variant);
      transition: background-color .5s ease;
    }
  }
  &:after{
    content: '+';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    height: 20px;
    width: 20px;
    border-radius: 100%;
    line-height: 20px;
    text-align: center;
    font-size: 1.1rem;
    background-color: var(--color-bg-variant);
    color: white;
    transform: translateY(-50%) translateX(-50%);
    transition: all .3s .5s ease;
    cursor: pointer;
    cursor: hand;
  }
  ul{
    opacity: 0;
  }
  ul{
    margin-top: 15px;
    opacity: 0;
    width: 100%;
    margin-left: 0px;
    //height: 0;
    transition: all .5s ease;
    text-align: center;
    font-size: 0.9rem;
    li{
      background-color: #e4e4e4;
      margin-top: 5px;
      border-radius: 5px;
      width: 100%;
      height: 0px;
      overflow: hidden;
      transition: height 1s ease;
      
    }
  }
  
  //
}
.tooltip{
  position: relative;
  padding: 5px;
  border-radius: 5px;
  width: 70px;
  text-align: center;
  font-size: 0.9rem;
  font-weight: bold;
  margin: 0 auto;
  margin-bottom: 15px;
  animation-duration: 3s;
  animation-name: jump;
  animation-iteration-count: infinite;
  background-color: #fff;
  color: var(--color-bg-variant);
  transition: all 1s ease;
  pointer-events: none;
  &::after{
    content: '';
    position: absolute;
    transform: rotate(45deg);
    display: block;
    height: 10px;
    width: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: inherit;
  }
  &::before{
    content: '';
    color: white;
  }
}
.btn-pluss-wrapper:hover{
  .tooltip{
    animation-duration: 0s;
    transition: all 1s ease;
    color: white;
    width: 90px;
    &::before{
      content: 'Choose!';
      display: block;
      color: var(--color-bg-variant);
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      margin: 0 auto;
      transform: translateY(-50%);
      transition: all 1s .3s ease;
    }
  }
  .btn-pluss{
    width: 150px;
    //height: 120px;
    border-radius: 15px;
    padding-bottom: 5px;
    transition: width .3s ease, border-radius .3s ease, padding-bottom .3s ease;
    &::after{
      transition: all .3s ease;
      left: 50%;
      top: 10px;
      transform: translateY(-5px) translateX(-50%);
    }
    ul{
      opacity: 1;
      //height: 100%;
      margin-top: 30px;
      transition: all 1s ease;
    }
    li{
      height: 25px;
      transition: height 1s ease;
      &:hover{
        border-bottom: 1px solid darken(#e9e5e5, 10);;
      }
    }
  }
}
@keyframes jump {
  0% { 
    transform: translateY(3px)
  }
  50% { 
    transform: translateY(-15px)
  }
   100% { 
    transform: translateY(3px)
  }
}

`;