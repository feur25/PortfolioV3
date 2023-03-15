import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import Flip from "gsap/Flip";
import React, { useEffect } from "react";
import { Page } from "../../../components/Page";
import { red, green, yellow, blue, white } from "../../../utils";
import { Educations, Paragraph, SkillsWrapper, Text, Button } from "./AboutStyles";
import { AboutItem } from "./AboutItem";
import Skills from "./SkillBall";
import helysio from "../../../assets/images/helysio.png";
import highschool from "../../../assets/images/highschool.jpeg";
import sos from "../../../assets/images/sos.png";
import UserCard from './Profile';
// import "../../Controller/AboutController";

export const About = () => {
      useEffect( () => {
        gsap.registerPlugin(Flip);
        let cards = document.querySelectorAll(".about-item");
        cards.forEach((card, i) => {
          if (i === 0) {
            card.classList.add("active");
          }
          card.addEventListener("mouseenter", (e) => {
            if (card.classList.contains("active")) {
              return;
            }
            const state = Flip.getState(cards);
            cards.forEach((c) => {
              c.classList.remove("active");
            });
            card.classList.add("active");
            Flip.from(state, {
              duration: 0.5,
              ease: "elastic.out(1,0.9)",
              absolute: true,
            });
          });
        });
      }, []);
  return (
    <Page header="About">
      <Text>
        <Paragraph>
          <UserCard />
        <Educations>
          <AboutItem
            color={red}
            active
            data={{
              title: "Helysio",
              p: "Server Minecraft Abandonnée",
              image: helysio,
            }}
          />
          <AboutItem
            color={green}
            data={{
              title: "Engineer",
              p: "Jeu vidéo ou vous incarnerais un Robot, fait sur UE5",
              image: highschool,
            }}
          />
          <AboutItem
            color={yellow}
            data={{
              title: "En cours ",
              p: "A completer",
              image: sos,
            }}
          />
          <AboutItem
            color={blue}
            data={{
              title: "En cours ",
              p: "A completer",
              image: sos,
            }}
          />
          <AboutItem
            color={white}
            data={{
              title: "En cours ",
              p: "A completer",
              image: sos,
            }}
          />
        </Educations>
        <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </Paragraph>
      </Text>
      <SkillsWrapper>
        <Canvas camera={{ position: [0, 0, 18] }}>
          <Skills />
        </Canvas>
      </SkillsWrapper>
    </Page>
  );
};
