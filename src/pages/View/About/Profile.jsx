import React, { Component } from 'react';
import { ProfileStyles } from './AboutStyles';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';
const root = document.querySelector("#root");

// Styles
const bodyStyles = {
  width: "100%",
  height: "100vh",
}
const headerStyles = {
  textAlign: "center",
  color:"#fff",
}
const cardContainerStyles = {
  width: "300px",
  height: "500px",
  // background: "#fff",
  borderRadius: 35
  // boxShadow: "1px 1px 35px #444"
};
const imgContainerStyles = {
  backgroundColor:"#fff",
  height: "45%",
  margin: 0,
  borderTopRightRadius: 35,
  borderTopLeftRadius: 35,
  // background: "#444",
  backgroundSize: "cover"
}
const avatarContainerStyles = {
  width: "150px",
  height: "150px",
  zIndex: "9",
  position: "relative",
  top: "-85px",
  left: "65px",
  right: "0",
  margin: "0 auto",
  border: "10px solid #fff",
  background: "#000",
  backgroundSize: "cover",
  display: "inline-block",
  textAlign: "center",
  borderRadius: "50%"
};
const titleStyles = {
  color:"#555",
  fontWeight: "100",
  outline: "none",
  margin: "0px",
  display: "inline-block",
  width: "100%",
  textAlign: "center",
  position: "relative",
  top: "-85px"
};
const subTitleStyles = {
  position: "relative",
  top: "-95px",
  textAlign: "center",
  fontWeight: "100",
  color: "#888"
};
const bioContainerStyles = {
  position: "relative",
  top: "-95px"
};
const bioStyles = {
  color: "#444",
  padding: "15 30px",
  textAlign: "center"
};
const iconsContainerStyles = {
  position: "relative",
  top: "-85px",
  textAlign: "center"
}
const iconStyles = {
  margin: "0 10px",
  color: "#5C6BC0",
  fontSize: "24px"
}
const cardBackStyles = {
  height: 500,
  width: 300,
  position: "absolute",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  margin: "auto",
  borderRadius: "35px",
  boxShadow: "1px 1px 35px #444",
  background: "')",
  backgroundSize: "cover",
  backgroundPosition: "right"
}
const madeByStyles = {
  color: "#fff",
  opacity: ".5",
  textAlign: "center",
  padding: "0px"
}

const imgStyles = {
  width: 300,
  height : "95%",
  borderTopRightRadius: 35,
  borderTopLeftRadius: 35
}

const avatarImgStyles = {
  width: "100%",
  position: "absolute",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  margin: "auto",
  borderRadius: "50%"
}

const cardBackImgStyles = {
  height: "100%",
  width: "100%",
  borderRadius: 35,
  position: "absolute"
  
}

// Components
class CardImg extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  render(){
    return (
       <div style={imgContainerStyles} className="imgContainer">
            <img src={this.props.imgSrc} className="img" style={imgStyles} />
       </div>
    )
  }
}
class CardAvatar extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  render(){
    return (
      <div style={avatarContainerStyles} className="infoContainer">
        <img src={this.props.avatarSrc} style={avatarImgStyles} />
      </div>
    )
  }
}
class CardTitle extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  render(){
    return (
      <div className="titleDiv">
        <h1 id={this.props.targetId} style={titleStyles} className="title">{this.props.title}</h1>
        <h4 style={subTitleStyles} className="subTitle">{this.props.subTitle}</h4>
      </div>
    )
  }
}
class CardBio extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  render(){
    return (
      <div style={bioContainerStyles} className="bioContainer">
        <p style={bioStyles} className="bio">{this.props.bio}</p>
      </div>
    )
  }
}
class CardSocialIcons extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  render(){
    return (
      <div style={iconsContainerStyles} className="iconContainer">
        <span style={iconStyles} className="icons"><i class="fab fa-facebook-square"></i></span>
        <span style={iconStyles} className="icons"><i class="fab fa-youtube-square"></i></span>
        <span style={iconStyles} className="icons"><i class="fab fa-twitter-square"></i></span>
      </div>
    )
  }
}
// class CardBack extends React.Component {
//   // constructor(props){
//   //   super(props);
//   // }
//   render(){
//     return (
//       <div style={cardBackStyles} className="cardBack">
//       </div>
//     )
//   }
// }
class Card extends React.Component {
  //  constructor(props){
  //    super(props);
  //    this.state = {
  //      title : "Jake Sully",
  //     //  subTitle: "@Na'vi_4_Lyf",
  //      bio: "Sick of doctors telling me what I couldn't do. I was a marine. A warrior... of the uh... Jarhead Clan. My cup is empty.",
  //      direction: "forwards"
  //    }
  //  }
   componentWillMount(){
    if (this.props.type == "Quentin"){
       this.setState({
         title: "Coletta Chambon Quentin",
        //  subTitle: "@Quentin",
         bio: "Bachelor 2 Chez Ynov a Aix-En-Provence. Je suis motivé et je souhaite devenire data scientist"
       })
     }
   }
   
   render(){
     
     return (
        <ProfileStyles>
         <div className="flipperContainer">
           <div className="flipper">
              <div style={cardContainerStyles} className="cardFront cardContainer">
                  <CardImg imgSrc={this.props.imgSrc} />
                  <CardAvatar avatarSrc={this.props.avatarSrc} />
                  <CardTitle targetId={this.props.targetId} title={this.state.title} subTitle={this.state.subTitle} />
                  <CardBio bio={this.state.bio} />
                  <CardSocialIcons />
              </div>
             <div style={cardBackStyles} className="cardBack">
               <img className="cardBackImg" style={cardBackImgStyles} src={this.props.cardBackImgSrc}/>
               <p style={madeByStyles} >@Quentin</p>
             </div>
            </div>
       </div>
       </ProfileStyles >
     )
   }
 }
 class CardContainer extends React.Component {
   constructor(props){
     super(props);
   }
   render(){
    // 
     return (
        <ProfileStyles>
          <div style={bodyStyles} className="body">
            <div className="flex">
              <Card type="Quentin" imgSrc="https://media.giphy.com/media/Y6pDMTysYTQ2I/giphy.gif" avatarSrc="https://i.pinimg.com/originals/74/4d/b3/744db3fd9842133829be6e0182c3d62d.jpg" />
            </div>
          </div>
      </ProfileStyles>
     )
   }
 }
 class NewApp extends React.Component {
   constructor(props){
     super(props);
   }
   render(){
     return (
        <ProfileStyles>

       <div>
          <CardContainer />
       </div>            
        </ProfileStyles>
     )
   }
 }
export default NewApp;